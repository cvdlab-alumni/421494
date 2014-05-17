from pyplasm import *
from scipy import *
import sys, os
sys.path.insert(0,'C:/Python27/Lib/site-packages/larcc/lib/py/')
from simplexn import *
from splines import *
from larcc import *
from lar2psm import *
from largrid import *
from mapper import *
from sysml import *

shape = [1,1,1]
sizePatterns = [[10],[5],[0.2]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
print "\n diagram =",diagram
#VIEW((STRUCT(MKPOLS(diagram))))


DRAW = COMP([VIEW,STRUCT,MKPOLS])

#basis construction
master = assemblyDiagramInit([9,5,2])([[0.3,2.8,0.2,1.8,0.2,2.3,0.2,2,0.3],[0.3,1.2,0.2,3.3,.3],[.3,2.7]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)

#to see in
toRemove = [17,37,57,77,13,33,53,73,23,43]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
DRAW(master)

#new numbering
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toMerge = 3

#porta1
diagram = assemblyDiagramInit([1,3,2])([[0.3],[0.1,1,0.1],[2.1,0.6]])
#DRAW(diagram)
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

toRemove = [81]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)
 
#porta2
toMerge = 54
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
V#IEW(hpc)

toRemove = [85]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)

#porta3
diagram = assemblyDiagramInit([3,1,2])([[0.9,1,0.9],[0.2],[2.1,0.6]])
toMerge = 13
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [89]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)

#porta4
diagram = assemblyDiagramInit([3,1,2])([[0.4,1,0.4],[0.2],[2.1,0.6]])
toMerge = 29
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [93]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)

#porta5
diagram = assemblyDiagramInit([3,1,2])([[0.65,1,0.65],[0.2],[2.1,0.6]])
toMerge = 45
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [97]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)

#finestra1
diagram = assemblyDiagramInit([5,1,3])([[0.6,0.75,0.1,0.75,0.6],[0.3],[0.8,1.5,0.4]])
toMerge = 15
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [103,109]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)

#finestra2
diagram = assemblyDiagramInit([5,1,3])([[0.4,0.7,0.1,0.7,0.4],[0.3],[0.8,1.5,0.4]])
toMerge = 30
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [115,121]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)

#finestra2
diagram = assemblyDiagramInit([3,1,3])([[0.5,1,0.5],[0.3],[0.8,1.5,0.4]])
toMerge = 45
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)
#VIEW(hpc)
toRemove = [127]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)

#finestra3
diagram = assemblyDiagramInit([1,5,3])([[0.3],[1.15,0.9,0.2,0.9,1.15],[0.8,1.5,0.4]])
toMerge = 69
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)
#VIEW(hpc)
toRemove = [134,140]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)


#porta6
diagram = assemblyDiagramInit([1,3,2])([[0.3],[0.1,1,2.2],[2.1,0.6]])
toMerge = 51
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)
toRemove = [144]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
DRAW(master)