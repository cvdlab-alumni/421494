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


DRAW = COMP([VIEW,STRUCT,MKPOLS])

#basis construction 10.1x5.3x3
master = assemblyDiagramInit([9,5,2])([[0.3,2.8,0.2,1.8,0.2,2.3,0.2,2,0.3],[0.3,1.2,0.2,3.3,.3],[.3,2.7]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)

#to see in
toRemove = [17,37,57,77,13,33,53,73,23,43]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master)

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
#DRAW(master)
 
#porta2
toMerge = 54
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
V#IEW(hpc)

toRemove = [85]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)

#porta3
diagram = assemblyDiagramInit([3,1,2])([[0.9,1,0.9],[0.2],[2.1,0.6]])
toMerge = 13
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [89]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)

#porta4
diagram = assemblyDiagramInit([3,1,2])([[0.4,1,0.4],[0.2],[2.1,0.6]])
toMerge = 29
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [93]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)

#porta5
diagram = assemblyDiagramInit([3,1,2])([[0.65,1,0.65],[0.2],[2.1,0.6]])
toMerge = 45
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [97]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)

#finestra1
diagram = assemblyDiagramInit([5,1,3])([[0.6,0.75,0.1,0.75,0.6],[0.3],[0.8,1.5,0.4]])
toMerge = 15
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [103,109]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)

#finestra2
diagram = assemblyDiagramInit([5,1,3])([[0.4,0.7,0.1,0.7,0.4],[0.3],[0.8,1.5,0.4]])
toMerge = 30
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [115,121]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)

#finestra2
diagram = assemblyDiagramInit([3,1,3])([[0.5,1,0.5],[0.3],[0.8,1.5,0.4]])
toMerge = 45
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)
#VIEW(hpc)
toRemove = [127]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)

#finestra3
diagram = assemblyDiagramInit([1,5,3])([[0.3],[1.15,0.9,0.2,0.9,1.15],[0.8,1.5,0.4]])
toMerge = 69
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),GREEN,2)
#VIEW(hpc)
toRemove = [134,140]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#porta6
diagram = assemblyDiagramInit([1,3,2])([[0.3],[0.1,1,2.2],[2.1,0.6]])
toMerge = 51
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),RED,2)
#VIEW(hpc)
toRemove = [144]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)

#porta7B
diagram = assemblyDiagramInit([3,1,2])([[0.5,1,0.5],[0.3],[2.1,0.6]])
toMerge = 60
master = diagram2cell(diagram,master,toMerge)
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
toRemove = [148]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


def rgbCol(col):
	return [col[0]/255.0, col[1]/255.0, col[2]/255.0]
ColTer = rgbCol([112, 0, 0])
ColKhaki = rgbCol([240,230,170])
ColKhaki2 = rgbCol([240,230,150])
ColErba = rgbCol([154,205,50])
ColMarciapiede = rgbCol([120,120,120])
#balc
shape = [1,1,1]
sizePatterns = [[12],[2],[0.1]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
master = STRUCT(MKPOLS(master))
balcBase = larApply(t(0,5.3,0))(diagram)
balcBase = STRUCT(MKPOLS(balcBase))

shape = [1,1,1]
sizePatterns = [[12],[0.2],[0.9]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
balcBaseVert = larApply(t(0,7.2,0))(diagram)
balcBaseVert = STRUCT(MKPOLS(balcBaseVert))

shape = [1,1,1]
sizePatterns = [[0.2],[2],[0.9]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
balcBaseLeftUp = larApply(t(0,5.3,0))(diagram)
balcBaseLeftUp = STRUCT(MKPOLS(balcBaseLeftUp))

shape = [1,1,1]
sizePatterns = [[0.2],[7.3],[0.9]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
balcBaseRightVert = larApply(t(11.8,0,0))(diagram)
balcBaseRightVert = STRUCT(MKPOLS(balcBaseRightVert))

shape = [1,1,1]
sizePatterns = [[1.9],[0.2],[0.9]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
balcBaseDown = larApply(t(10.1,0,0))(diagram)
balcBaseDown = STRUCT(MKPOLS(balcBaseDown))

shape = [1,1,1]
sizePatterns = [[1.85],[5.3],[0.1]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
balcBase2 = larApply(t(10.1,0,0))(diagram)
balcBase2 = STRUCT(MKPOLS(balcBase2))

shape = [1,1,1]
sizePatterns = [[4],[1.5],[0.2]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
entranceBase = (diagram)
entranceBase = STRUCT(MKPOLS(entranceBase))
entranceBase = T(1)(-4)(entranceBase)

balcMura = STRUCT([balcBaseVert,balcBaseLeftUp,balcBaseRightVert,balcBaseDown])
Balcony = STRUCT([COLOR(ColTer)(balcBase),COLOR(ColTer)(balcBase2),COLOR(ColKhaki)(balcMura)])
Casa_1 = STRUCT([COLOR(ColKhaki)(master),Balcony,COLOR(ColKhaki)(entranceBase)])
#VIEW(Casa_1)
Casa_2 = T([1,2,3])([0,0,3])(Casa_1)
Casa_3 = T([1,2,3])([0,0,6])(Casa_1)
Casa_4 = T([1,2,3])([0,0,9])(Casa_1)
Build = STRUCT([Casa_1,Casa_2,Casa_3,Casa_4])
Build = (R([1,2])(PI)(Build))
Build_1 = S(1)(-1)(Build)
Build_1 = T(1)(4.5)(Build_1)

#Stairs
step2D = MKPOL ([ [[0,0],[0,0.15],[0.16,0.15/2],[0.16,0.15]] , [[1,2,3,4]] ,None]) 
step3D = PROD([step2D,Q(3)]) 
step3D = MAP([S1,S3,S2])(step3D) 
ramp = STRUCT(NN(10)([step3D,T([1,3])([0.16,0.15/2])]))
ramp = R([1,2])(PI/2)(ramp)
ramp = S([2,3])([1.5,1.9])(ramp)
ramp1 = R([1,2])(PI)(ramp)
ramp1 = T([1,2,3])([-1.5,2.3,0])(ramp1)
ramp = T([1,2,3])([0,0,1.4])(ramp)

shape = [1,1,1]
sizePatterns = [[4.5],[1.5],[0.2]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
mediumBase = (diagram)
mediumBase = STRUCT(MKPOLS(mediumBase))
mediumBase = T([1,2,3])([0,-5,1.6])(mediumBase)
shape = [1,1,1]
sizePatterns = [[4.5],[5],[0.2]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
elevatorBase = STRUCT(MKPOLS(diagram))
elevatorBase = T([1,2,3])([0,-5,0])(elevatorBase)

ramp = STRUCT([ramp,ramp1])
ramp = T([1,2,3])([3,-3.5,0.1])(ramp)
ramp = STRUCT([ramp,mediumBase])
rampNext1 = T(3)(3)(ramp)
rampNext2 = T(3)(3)(rampNext1)
ramp = STRUCT([ramp,rampNext1,rampNext2,elevatorBase])

#mura esterne alla scala
diagram = assemblyDiagramInit([5,1,3])([[1.7,0.5,0.1,0.5,1.7],[0.2],[1.5,1,0.5]])
V,CV = diagram
hpc = SKEL_1(STRUCT(MKPOLS(diagram)))
hpc = cellNumbering (diagram,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)
toRemove = [4,10]
diagram = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(diagram)
muro_estBack = STRUCT(MKPOLS(diagram))
muro_estBack_1 = T([1,2,3])([0,0,3])(muro_estBack)
muro_estBack_2 = T([1,2,3])([0,0,6])(muro_estBack)
muro_estBack_3 = T([1,2,3])([0,0,9])(muro_estBack)
muro_estBack = STRUCT([muro_estBack,muro_estBack_1,muro_estBack_2,muro_estBack_3])
muro_estBack = T(2)(-0.2)(muro_estBack)
diagram = assemblyDiagramInit([3,1,3])([[1.5,1.5,1.5],[0.2],[0.2,2.1,0.7]])
V,CV = diagram
hpc = SKEL_1(STRUCT(MKPOLS(diagram)))
hpc = cellNumbering (diagram,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)
toRemove = [4]
diagram = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(diagram)
muro_estFront1 = STRUCT(MKPOLS(diagram))
muro_estFront = STRUCT([muro_estFront1,muro_estBack_1,muro_estBack_2,muro_estBack_3])
muro_estFront = T([1,2,3])([0,-5.2,0])(muro_estFront)
muro_est = STRUCT([muro_estBack,muro_estFront])
#VIEW(muro_est)

shape = [1,1,1]
sizePatterns = [[3.5],[13],[0.15]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
marciapiede = larApply(t(0.5,-18.2,0))(diagram)
marciapiede = STRUCT(MKPOLS(marciapiede))

shape = [1,1,1]
sizePatterns = [[35],[20],[0.05]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
piano_erba = larApply(t(-15,-18.2,0.01))(diagram)
piano_erba = STRUCT(MKPOLS(piano_erba))

base_albero_1 = CYLINDER([0.3,2.5])(30)
model = checkModel(larSphere(1)())
base_albero_2 = STRUCT(MKPOLS(model))
base_albero_2 = T(3)(2.4)(base_albero_2)
albero = STRUCT([COLOR(rgbCol([127,70,13]))(base_albero_1),COLOR(rgbCol([0,102,0]))(base_albero_2)])
#VIEW(albero)
albero_1r = T([1,2,3])([5.5,-9,0])(albero)
albero_2r = T([1,2,3])([0,-4,0])(albero_1r)
albero_3r = T([1,2,3])([0,-4,0])(albero_2r)
albero_1l = T([1,2,3])([-6.5,0,0])(albero_1r)
albero_2l = T([1,2,3])([0,-4,0])(albero_1l)
albero_3l = T([1,2,3])([0,-4,0])(albero_2l)
alberi = STRUCT([albero_1l,albero_2l,albero_3l,albero_1r,albero_2r,albero_3r])
esterno = STRUCT([COLOR(ColErba)(piano_erba),COLOR(ColMarciapiede)(marciapiede),alberi])
#VIEW(esterno)

#tetto
shape = [1,1,1]
sizePatterns = [[30],[6],[0.65]]
diagram = assemblyDiagramInit(shape)(sizePatterns)
tetto_1 = larApply(t(-12.35,-5,12))(diagram)
tetto_1 = STRUCT(MKPOLS(tetto_1))

dom = INTERVALS(1)(40)
bz1 = BEZIER(S1)([[0,-10],[3,-20],[10,-6],[20,-6],[27,-20],[30,-10]])
bz2 = BEZIER(S1)([[0,0],[5,0],[15,0],[25,0],[30,0]])
bz1 = MAP(bz1)(dom)
bz2 = MAP(bz2)(dom)
ground = SOLIDIFY(STRUCT([bz1,bz2]))
#VIEW(ground)
ground = PROD([ground,Q(0.65)])
tetto_2 = T([1,2,3])([-12.35,5,12])(ground)
tetto = COLOR(rgbCol([220,201,137]))(STRUCT([tetto_1,tetto_2]))
#VIEW(tetto)
VIEW(STRUCT([Build,Build_1,COLOR(ColKhaki2)(ramp),COLOR(ColKhaki2)(muro_est),esterno,tetto]))