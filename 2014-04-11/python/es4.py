from pyplasm import *
import sys
sys.path.insert(0,'C:/Python27/Lib/site-packages/larcc/lib/py/')
from simplexn import *
from larcc import *
from lar2psm import *
from largrid import *
from scipy import *
from random import random as rand

def rgbCol(col):
	return [col[0]/255.0, col[1]/255.0, col[2]/255.0]

x_plinti = QUOTE([2,0]*1)
y_plinti = QUOTE([1,0] *12)
y_plinti_center = QUOTE([1,0]*10)
plintiLeft = INSR(PROD)([x_plinti,y_plinti,Q(0.8)])
plinti_cent = INSR(PROD)([x_plinti,y_plinti_center,Q(0.8)])
plinti_cent = T([1,2,3])([2,2,0])(plinti_cent)
plintiRight = INSR(PROD)([x_plinti,y_plinti,Q(0.8)])
plintiRight = T([1,2,3])([4,0,0])(plintiRight)
plinti = STRUCT([plintiLeft, plinti_cent, plintiRight])
#VIEW(plinti)

#floor0
step2D = MKPOL ([ [[0,0],[0,0.15],[0.2,0.15/2],[0.15,0.2]] , [[1,2,3,4]] ,None]) 
step3D = PROD([step2D,Q(2)]) 
step3D = MAP([S1,S3,S2])(step3D) 
ramp = STRUCT(NN(10)([step3D,T([1,3])([0.2,0.1/2])]))
ramp = ( R([1,2])(PI/2)(ramp))
ramp = T([1,2,3])([4,0,0])(ramp)
floor0 = STRUCT([COLOR(GRAY)(plinti), COLOR(WHITE)(ramp)])

#floor1
x_plintiT = QUOTE([2,0]*1)
y_plintiT = QUOTE([1,0]*10)
plintiT = INSR(PROD)([x_plintiT,y_plintiT,Q(0.5)])
plintiT_L = T([1,2,3])([0,0,0])(plintiT)
plintiT_C = T([1,2,3])([2,0,0])(plintiT)
plintiT_R = T([1,2,3])([4,0,0])(plintiT)
base_tetto = STRUCT([plintiT_L,plintiT_C,plintiT_R])
base_2 = INSR(PROD)([QUOTE([7,0]),QUOTE([11,0]),Q(0.2)])
base_2 = T([1,2,3])([-0.5,-0.5,0.5])(base_2)
base = STRUCT([COLOR(GRAY)(base_2),COLOR(WHITE)(base_tetto)])
ver_tri = [[0,0,0], [6,0, 0],[3,0,2]]
ver_tri2 = [[0,10,0], [6,10, 0],[3,10,2]]
cel = [[1,2,3]]
base_tri = MKPOL([ver_tri, cel, None])
base_tri2 = MKPOL([ver_tri2, cel, None])
base_tri = JOIN([base_tri, base_tri2])
base_tri = T([1,2,3])([0,0,0.7])(base_tri)
floor1 = STRUCT([base, COLOR(WHITE)(base_tri)])

floor1 = T([1,2,3])([0,2,5])(floor1)
plinti_compl= STRUCT([floor0,floor1])
#VIEW(floor1)

#COLONNE
rod = CYLINDER([0.2,5])(30)
more_colx = [T(1)(1.15),rod]
col_row = STRUCT(NN(5)(more_colx))
col_row = T([1,2,3])([0,2.2,0])(col_row)
rod1 = T([1,2,3])([0.2,2.2,0])(rod)
col_row = STRUCT([col_row,rod1])
col_row_back = T([1,2,3])([0,9.6,0])(col_row)

more_coly = [T(2)(1.1),rod]
col_rowy = STRUCT(NN(8)(more_coly))
col_rowy = T([1,2,3])([0.2,2,0])(col_rowy)
col_rowy_right = T([1,2,3])([5.6,0,0])(col_rowy)
columns = STRUCT([col_row, col_row_back, col_rowy, col_rowy_right])
plinti_compl = STRUCT([plinti_compl,columns])
#VIEW(plinti_compl)


#mura
ver_m1 = [[0,0,0], [0.2,0, 0],[0.2,0,5], [0,0,5]]
ver_m2 = [[0,7,0], [0.2,7, 0],[0.2,7,5], [0,7,5]]
ver_m3 = [[0,0,0], [6,0,0],[0,0,5], [6,0,5]]
ver_m4 = [[0,0.2,0], [6,0.2,0],[0,0.2,5], [6,0.2,5]]
ver_m5 = [[0,0,0], [2,0,0],[0,0,5], [2,0,5]]
ver_m6 = [[0,0.2,0], [2,0.2,0],[0,0.2,5], [2,0.2,5]]
cel = [[1,2,3,4]]
mura1 = MKPOL([ver_m1, cel, None])
mura2 = MKPOL([ver_m2, cel, None])
mura3 = MKPOL([ver_m3, cel, None])
mura4 = MKPOL([ver_m4, cel, None])
mura5 = MKPOL([ver_m5, cel, None])
mura6 = MKPOL([ver_m6, cel, None])
muro_left = JOIN([mura1, mura2])
muro_back = JOIN([mura3, mura4])
muro_back = T([1,2,3])([0,11.8,0.5])(muro_back)
muro_left = T([1,2,3])([0,5,0.5])(muro_left)
muro_right = T([1,2,3])([5.8,0,0])(muro_left)
muro_center = JOIN([mura5, mura6])
muro_center_left = T([1,2,3])([0,5.1,0.5])(muro_center)
muro_center_right = T([1,2,3])([4,0,0])(muro_center_left)
mura_struct = STRUCT([COLOR(GRAY)(muro_left), COLOR(GRAY)(muro_right), COLOR(GRAY)(muro_back), 
				COLOR(GRAY)(muro_center_left), COLOR(GRAY)(muro_center_right)])				
build = STRUCT([plinti_compl,mura_struct])
build = T([1,2,3])([30,5,0])(build)
#VIEW(build)
col1 = rgbCol([210, 180, 140])

V11 = [[0,0], [15,0], [50,0], [0,40], [15,40], [50,40]]
FV = [[0,1,3], [1,2,4], [1,3,4], [2,4,5]]
EV = [[0,1],[0,3],[1,2],[1,3],[1,4],[2,4],[2,5],[3,4],[4,5]]
baseDalar = STRUCT([EXPLODE(1,1,1)(MKPOLS((V11,FV)))])

plan = STRUCT([build,COLOR(col1)(baseDalar)])
#VIEW(plan)

x_plinti = QUOTE([1.2,-4.8] *8)
y_plinti = QUOTE([1.2,-4.8] *6)
plinti = INSR(PROD)([x_plinti,y_plinti,Q(0.6)])
x_pilastri = QUOTE([-0.4,0.4,-0.4,-4.8] *8)
y_pilastri = QUOTE([-0.4,0.4,-0.4,-4.8] *6)
pilastri = INSR(PROD)([x_pilastri,y_pilastri,QUOTE([-0.6,3.6] *12)])
x_travi = QUOTE([-0.4,6*7+.4])
y_travi = QUOTE([-0.4,6*5+.4] )
travi = INSR(PROD)([x_travi,y_travi,QUOTE([0.6,-3,0.6] *12)])
edificio = STRUCT([plinti,pilastri,travi])
edificio0 = T([1,2,3])([2,45,0])(edificio)
edificio0 = S([1,2,3])([0.5,0.5,0.5])(edificio0)
edificio1 = T([1,2,3])([70,60,0])(edificio)
edificio1 = S([1,2,3])([0.4,0.4,0.7])(edificio1)
muroLatoSx = S([1,2,3])([0.5,40,0.5])(CUBOID([1,1,1]))
muroLatoDx = T([1,2,3])([49.5,0,0])(muroLatoSx)
muroLatoDietro = S([1,2,3])([50,0.5,0.5])(CUBOID([1,1,1]))
muroLatoDietro = T([1,2,3])([0,39.5,0])(muroLatoDietro)
muroLatoDavantiSx = S([1,2,3])([20,0.5,0.5])(CUBOID([1,1,1]))
muroLatoDavantiDx = T([1,2,3])([30,0,0])(muroLatoDavantiSx)
muroEsterno = STRUCT([muroLatoSx, muroLatoDx, muroLatoDietro, muroLatoDavantiSx, muroLatoDavantiDx])

fonLatoSx = S([1,2,3])([0.5,5,0.5])(CUBOID([1,1,1]))
fonLatoDx = S([1,2,3])([0.5,5.5,0.5])(CUBOID([1,1,1]))
fonLatoDx = T([1,2,3])([5,0,0])(fonLatoDx)
fonLatoDown = S([1,2,3])([5,0.5,0.5])(CUBOID([1,1,1]))
fonLatoUp = T([1,2,3])([0,5,0])(fonLatoDown)
water = S([1,2,3])([4.5,4.5,0.4])(CUBOID([1,1,1]))
water = T([1,2,3])([0.5, 0.5, 0])(water)
cyl = CYLINDER([0.1,1])(36)
cylUp = CYLINDER([0.3,0.2])(36)
cylUp =  T([1,2,3])([2.7, 2.5, 1.4])(cylUp)
cyl = T([1,2,3])([2.7, 2.5, 0.4])(cyl)
fontanna = STRUCT([fonLatoSx, fonLatoDx, fonLatoDown, fonLatoUp, COLOR(BLUE)(water), cyl, cylUp])
fontanna = T([1,2,3])([10, 15, 0])(fontanna)

lamp = CYLINDER([0.1,3])(36)
lampUp = CYLINDER([0.4,0.2])(36)
lampUp = T([1,2,3])([0,0,3.05])(lampUp)
lampDown = CYLINDER([0.4,0.05])(36)
lampDown = T([1,2,3])([0,0,3])(lampDown)
lamp = STRUCT([lamp, lampUp, COLOR(rgbCol([255,255,0]))(lampDown)])
lamp1 = T([1,2,3])([3, 15, 0])(lamp) 
lamp2 = T([1,2,3])([44, 0, 0])(lamp1)
lamp3 = T([1,2,3])([47, 3, 0])(lamp)
lamp4 = T([1,2,3])([3, 3, 0])(lamp)
lamps = STRUCT([lamp1, lamp2, lamp3, lamp4])

basepanchina0 = S([1,2,3])([0.2,3,0.5])(CUBOID([1,1,1]))
basepanchina1 = S([1,2,3])([0.4,3,0.1])(CUBOID([1,1,1]))
basepanchina2 = S([1,2,3])([0.1,3,0.3])(CUBOID([1,1,1]))
basepanchina0 = T([1,2,3])([0.1,0,0])(basepanchina0)
basepanchina1 = T([1,2,3])([0,0,0.5])(basepanchina1)
basepanchina2 = T([1,2,3])([0,0,0.6])(basepanchina2)
panchina = STRUCT([basepanchina0, COLOR(rgbCol([0,139, 69]))(basepanchina1), COLOR(rgbCol([0,139, 69]))(basepanchina2)])
panchina = T([1,2,3])([8,18,0])(panchina)
#VIEW(panchina)
panchina1 = (R([1,2])(PI)(panchina))
panchina1 = T([1,2,3])([26,39,0])(panchina1)
panchina2 = (R([1,2])(PI/2)(panchina))
panchina2 = T([1,2,3])([32.5,3.5,0])(panchina2)
panchine = STRUCT([panchina, panchina1, panchina2])
#VIEW(panchine)

baseFiorSx = S([1,2,3])([0.1,3,0.5])(CUBOID([1,1,1]))
baseFiorDx = T([1,2,3])([0.6,0,0])(baseFiorSx)
baseFiorDown = S([1,2,3])([0.6,0.1,0.5])(CUBOID([1,1,1]))
baseFiorUp = T([1,2,3])([0,2.9,0])(baseFiorDown)
baseFior = S([1,2,3])([0.6,2.8,0.6])(CUBOID([1,1,1]))
baseFior = T([1,2,3])([0.05,0.1,0])(baseFior)
fior = CYLINDER([0.05,0.65])(36)
fior = T([1,2,3])([0.3,1,0])(fior)
fior1 = T([1,2,3])([0,1,0])(fior) 
fiori = STRUCT([baseFiorSx, baseFiorDx, baseFiorDown, baseFiorUp, COLOR(rgbCol([0,255, 0]))(baseFior), 
COLOR(rgbCol([255,0,0]))(fior), COLOR(rgbCol([255,0, 0]))(fior1)])
vaso1 = T([1,2,3])([7.5,13.5,0])(fiori)
vaso2 = T([1,2,3])([17.5,13.5,0])(fiori)

points = [[ 2*PI*rand(),rand()] for k in range (1000)]
V = [[SQRT(r)*COS(alpha),SQRT(r)*SIN(alpha)] for alpha,r in points]
cells = [[k +1 ] for k,v in enumerate (V)]
c = MKPOL([V,cells, None ])
treeTronco = CYLINDER([0.1,2])(36)
fog = S([1,2,3])([0.05,0.05,1])(CUBOID([1,1,1]))
fog1 = (R([1,3])(PI/3)(fog))
fog2 = (R([1,3])(-PI/3)(fog))
fog3 = (R([2,3])(-PI/3)(fog))
fog4 = (R([2,3])(PI/3)(fog))
fog = STRUCT([fog1, fog2, fog3, fog4])
fog = T([1,2,3])([0,0,1.95])(fog)
tree = STRUCT([COLOR(rgbCol([139,71,38]))(treeTronco), COLOR(rgbCol([0,128,0]))(fog), c ]) 
tre1 = T([1,2,3])([8,2,0])(tree)
tree2 = T([1,2,3])([17,2,0])(tree)
tree3 = T([1,2,3])([40,2,0])(tree)
tree = T([1,2,3])([3,10,0])(tree)
tree4 = T([1,2,3])([44,0,0])(tree)
plan = STRUCT([plan, edificio0, edificio1, muroEsterno, fontanna, lamps, panchine, vaso1, vaso2, tre1, tree2, tree3, tree, tree4])
VIEW(plan)
