f=open("demoData.tsv",'r')
g=open("bubbleSort_increase.js",'w')
l=[]
f.readline() #index,height
for line in f.readlines():
	[a,b]=line.split()
	l.append((int(a),int(b)))
f.close()
bubbleSort=[[0 for i in range(len(l))] for j in range(len(l))]
for i in range(0,len(l)):
	for j in range(0,len(l)-1):
		if l[j][1]>l[j+1][1]:
			k=l[j]
			l[j]=l[j+1]
			l[j+1]=k
		bubbleSort[i][j]=[l[ii][0] for ii in range(len(l))]

g.write('bubbleSort1='+str(bubbleSort)+';')
g.close()
def getBubbleSort(i,j):
	return bubbleSort[i][j]
