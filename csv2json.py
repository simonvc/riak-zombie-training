
#TACGGATATTGGCCACAATCGACGTATGCGGCGTTCGGCTTGCTTGGGTGGATAGGCCGTGTTTATCTTATAATTTATGTCTAGGGTACTGCGTATACCACTTCGATCACACAGGAATCGCGGAGGTCGATCGAACTCGGCTTCGGACATCTATAAATAAGAGGAGAGCTGGATTTATAAGCTTACGTTGTTATGTGTCGCAACTCACTGGTGCGTTGACGCGACGGGGTCGCGCGCTATGAAAGTAGATATTCTTTTTGGCTATGTAAATCGGTGCATCGGGCATAACACGCAGATCCAAGGGATTATTTCCTACGACTCTGTCGTTCGCCCAGAAGTATAGATGGACGTTCGCGCCATTCCCGCGCGGGCACCTGGTCCCCT,male,Anthony J Dacosta,2600 Rafe Lane,Jackson,MS,39201,662-718-2255,3/25/1970,587-03-9892,Economist,B+,214.5,5' 9",32.368619,-90.183518
  #print dict(zip('dna,sex,name,street,city,state,postcode,phonenumber,dob,occupation,bloodtype,weight,height,lat,longd'.split(','), line.split(',')))

import sys
import json

for line in sys.stdin.readlines():
  jsonline={}
  dictionary=dict(zip('dna,sex,name,street,city,state,postcode,phonenumber,dob,othernumber,occupation,bloodtype,weight,height,lat,longd'.split(','), line.replace('\'', '.').replace('"', '').split(',')))
print json.dumps(dictionary)


