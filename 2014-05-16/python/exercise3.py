#function trying to automatize the merge and elimination of cells
def autoMrg_Numb_Canc(diagList,master,toRemove,toMerge) :
	for i in range(len(diagList)):
		V,CV = master
		max = len(CV)-1
		master = diagram2cell(diagList[i],master,toMerge[i])
		V,CV = master
		for h in range(len(toRemove[i])): toRemove[i][h] += max 
		master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove[i])]
	return master