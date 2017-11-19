# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup

import re
import json
import datetime

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


def buildJson(s, o, a, p, nome, sub, sns, centro):
    sText = "".join(s).replace('\n', " ")
    oText = "".join(o).replace('\n', " ")
    aText = "".join(a).replace('\n', " ")
    pText = "".join(p).replace('\n', " ")

    user = { "nome":nome, "sns":sns, "sub_sistema":sub, "centro_saude":centro }

    data = str(datetime.date.today())
    dia = 1
    inter = { "data": data, "anot":[{"dia":dia, "s":sText, "o":oText, "a":aText ,"p":pText}] }

    jsonT = str(json.JSONEncoder().encode({"user":user, "internamentos":inter}))
    return jsonT

def main():
    s = []
    o = []
    a = []
    p = []

    name = input("Nome: ")
    sub = input("Sub-Sistema: ")
    sns = input("SNS: ")
    centro = input("Centro: ")
    inpu = input("Ficheiro: ")
    parseNotes(inpu, s, o, a, p)
    valor = buildJson(s, o, a, p, name, sub, sns, centro)


    print(valor)

if __name__ == "__main__":
    main()
