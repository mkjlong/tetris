#!/usr/bin/env python3

import requests
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry
from bs4 import BeautifulSoup
import urllib
import matplotlib.pyplot as plt
import sys


def get_pc_info_for_user(uname):

    pc_leaderboard_url = "https://jstris.jezevec10.com/PC-mode?display=5&user=" + uname
    
    session = requests.Session()
    retry = Retry(connect=3, backoff_factor=0.5)
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)
    
    
    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'}
    res = session.get(pc_leaderboard_url, headers=headers)
    
    if res.status_code != 200:
        print("fail")
        exit()
    res_soup = BeautifulSoup(res.content, 'html.parser')
    
    #print(res_soup.prettify())
    table = res_soup.find('table')
    #print(table)
    
    pc_nums = []
    pc_pieces = []
    
    for row in table.find_all('tr')[1:]:
        cols = row.find_all('td')[0].find_all('td')
    #    for column in row.find_all('td')[0].find_all('td'):
    #        print(column, end="\n\n")
            
    #    print("Stuff", cols[1].text, cols[3].text)
        pc_nums.append(int(cols[1].text))
        pc_pieces.append(int(cols[3].text))
    #    print("-------------- END OF ROW --------------------\n\n\n")
    
    return(pc_nums, pc_pieces)

def get_failed_pc(pieces):
    return (pieces * 5) % 7 + 1



def show_stats(pc_pieces, uname=None):

    fails = {x:0 for x in range(1,8)}
    
    for p in pc_pieces:
        fails[get_failed_pc(p)] += 1
#    print(fails)
    
    plt.bar(range(len(fails)), list(fails.values()), align='center')
    plt.xticks(range(len(fails)), list(fails.keys()))
    if uname:
        plt.title("PC Fails for User " + uname)
    else:
        plt.title("PC Fails")
    plt.show()
    
    
if len(sys.argv) != 2:
    print("Usage: python pc_fails.py <jstris username>")
    exit()
uname = sys.argv[1]
#print(uname)
pc_nums, pc_pieces = get_pc_info_for_user(uname)
show_stats(pc_pieces, uname=uname)