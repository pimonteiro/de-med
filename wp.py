import requests
from bs4 import BeautifulSoup
import re

def getMeaning(word):
    baseUrl = "http://www.infopedia.pt/dicionarios/termos-medicos/"
    try:
        resposta = requests.get(baseUrl+word)
        parse_html = BeautifulSoup(resposta.content, "html.parser")
        pattern_match = parse_html.find("span", attrs={"class":"dolTraduzTrad"})
       # print(pattern_match.text)

    except:
        print("erro somewhere :D")
        print("Possivel prefixo/sufixo")

def parseNotes(path):
    pattern = re.compile("[SOAP]\)")
    s = []
    o = []
    a = []
    p = []
    with open(path) as f:
        for line in f:
            match = pattern.match(line.upper())
            print(match)


def main():
    parseNotes("anotacao.txt")

if __name__ == "__main__":
    main()
