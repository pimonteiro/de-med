import requests
from bs4 import BeautifulSoup

def getMeaning(word):
    baseUrl = "http://www.infopedia.pt/dicionarios/termos-medicos/"
    try:
        resposta = requests.get(baseUrl+word)
        test = BeautifulSoup(resposta.content, "html.parser")
        print(test)

    except:
        error = sys.exc_info()[0]
        print(error)

getMeaning("disfagia")
