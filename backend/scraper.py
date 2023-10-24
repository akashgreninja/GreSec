import requests
from bs4 import BeautifulSoup


def Main(url):
    with requests.Session() as req:
        # r = req.get(url, headers={'User-Agent': 'Ahmed American :)'})
        # soup = BeautifulSoup(r.content, 'html.parser')
        # vs = soup.find("input", id="__VIEWSTATE").get("value")
        # vsg = soup.find("input", id="__VIEWSTATEGENERATOR").get("value")
        # ev = soup.find("input", id="__EVENTVALIDATION").get("value")
        # data = {
        #     '__VIEWSTATE': vs,
        #     '__VIEWSTATEGENERATOR': vsg,
        #     '__EVENTVALIDATION': ev,
        #     'ctl00$ContentPlaceHolder1$txtContractAddress': '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        #     'ctl00$ContentPlaceHolder1$btnSubmit': "Verify"
        # }
        r = req.post(
            "https://etherscan.io/address/0x098b716b8aaf21512996dc57eb0615e2383e2f96", headers={'User-Agent': 'Akash Greninja :)'})
        soup = BeautifulSoup(r.content, 'html.parser')
        print(soup)
        tags = soup.find_all("span", class_="hash-tag text-truncate")
   
        # Loop through the tags and print the text content
        for tag in tags:
            if tag.text == "Exploit":
                print(tag.text)
   


Main("https://etherscan.io/proxyContractChecker")