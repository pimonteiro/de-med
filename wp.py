import requests
from bs4 import BeautifulSoup
import re

s = []
o = []
a = []
p = []
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
    flag = ""
    with open(path) as f:
        for line in f:
            match = pattern.match(line.upper())
            if(match != None):
                flag = match.group()
            else:
                if flag == "S)":
                    s.append(line)
                if flag == "O)":
                    o.append(line)
                if flag == "A)":
                    a.append(line)
                if flag == "P)":
                    p.append(line)


def main():
    parseNotes("anotacao.txt")

if __name__ == "__main__":
    main()
