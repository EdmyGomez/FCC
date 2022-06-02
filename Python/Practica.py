from operator import index


print("""Crear saltos
      de Linea como
      Desees:""")
# Creacion de lista Vacia
word=[]
word= ["hola",2,4,"buenas"]
print(word[1])
print(word[0])

number = 3
things = ["string", 0, [1, 2, number], 4.56]
print(things[1])
print(things[2])
print(things[2][2])

str = "Hello world!"
print(str[6])

words = ["spam", "egg", "spam", "sausage"]
print("spam" in words)
print("egg" in words)
print("tomato" in words)


nums = [1, 2, 3]
print(not 4 in nums)
print(4 not in nums)
print(not 3 in nums)
print(3 not in nums)

nums=[1,2,3]
nums.append(4)
print(nums)
print(len(nums))
print(max(nums))
print(min(nums))

words=["Python", "Fun"]
index=1
words.insert(index,"is")
print(words)
# Metodos Para trabajar con Elementos de una lista
letters = ['p', 'q', 'r', 's', 'p', 'u']
print(letters.index('r'))
print(letters.index('p'))
print(max(letters))
print(min(letters))
print((letters.count("p")))
print((letters.remove("p")))
print((letters))
print((letters.remove(letters[2])))
print((letters))
print((letters.reverse()))
print((letters))
# print(letters.index('z'))

import numpy as np
a=np.array([[5,6],[2,8]])
print(np.sum(a))
print(np.max(a))
print(np.min(a))

# Bucle for (iteraciones definidas)
words=["hello","spam", "eggs"]
for word in words:
    print(word + "!")
    
str = "testing for loops"
count = 0

for x in str:
   if(x == 't'):
    count += 1

print(count)

def f(named_arg, *a):
    print(a)
f("a","b","c")

# print(num:=int(input("ingresa numero:")))
# x=input("Ingrese nombre:")
# x=int(input("Ingrese numero:"))