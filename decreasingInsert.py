f=open("demoData.tsv",'r')
g=open("insertSort_decrease.js",'w')
l=[]
f.readline() #index,height
for line in f.readlines():
	[a,b]=line.split()
	l.append((int(a),int(b)))
f.close()
insertSort=[[] for j in range(len(l))]

for i in range(0,len(l)):
	tempValue=l[i]
	tempIndex=i
	while(tempIndex>0 and tempValue[1]>l[tempIndex-1][1]):
		l[tempIndex]=l[tempIndex-1]
		l[tempIndex-1]=tempValue
		tempIndex-=1
		insertSort[i].append([l[ii][0] for ii in range(len(l))])

g.write('insertSort2='+str(insertSort)+';')
g.close()
