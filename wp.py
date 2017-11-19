import requests
from bs4 import BeautifulSoup

import re
import json

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

def parseNotes(path, s, o, a, p):
    pattern = re.compile("[SOAP]\)")
    flag = ""
    with open(path) as f:
        for line in f:
            match = pattern.match(line.upper())
            if(match != None):
                flag = match.group()
            else:
                if (flag == "S)" or flag == ""):
                    s.append(line)
                if flag == "O)":
                    o.append(line)
                if flag == "A)":
                    a.append(line)
                if flag == "P)":
                    p.append(line)


def main():
    s = []
    o = []
    a = []
    p = []

    parseNotes("anotacao.txt", s, o, a, p)
    
    
    nome = "Filipe"
    sub = "nenhum"
    sns = "0000"
    centro = "braga"
    user = { "nome":nome, "sns":sns, "sub_sistema":sub, "centro_saude":centro }
    
    print(json.dumps(user))


if __name__ == "__main__":
    main()
