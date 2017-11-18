import requests
from bs4 import BeautifulSoup

def getMeaning(word):
    baseUrl = "http://www.infopedia.pt/dicionarios/termos-medicos/"
    try:
        resposta = requests.get(baseUrl+word)
        parse_html = BeautifulSoup(resposta.content, "html.parser")
        pattern_match = parse_html.find("span", attrs={"class":"dolTraduzTrad"})
        print(pattern_match.text)

    except:
        print("erro somewhere :D")
        print("Possivel prefixo/sufixo")


