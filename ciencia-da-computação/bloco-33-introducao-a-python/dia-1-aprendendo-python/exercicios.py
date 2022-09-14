def biggest(intA, intB):
    """Sum number"""
    return max([intA, intB])


def med(array):
    """Media da lista"""
    soma = 0
    for x in array:
        soma += x
    return soma / len(array)


def square(n):
    """Retorna o quadrado de asterisco"""
    for x in range(n):
        print(n * "*")


def biggestName(array):
    """Retorna o maior elemento de uma lista"""
    biggest = ""
    for x in array:
        if len(x) > len(biggest):
            biggest = x
    return biggest


def tinta(metros):
    """Tintas"""
    import math

    litros = metros / 3
    valor = math.ceil(litros / 18) * 80
    return (litros, valor)


def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
