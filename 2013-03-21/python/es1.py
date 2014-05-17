from pyplasm import *

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
VIEW(floor0)

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
VIEW(floor1)
floor1 = T([1,2,3])([0,2,5])(floor1)
plinti_compl= STRUCT([floor0,floor1])
#VIEW(plinti_compl)

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
VIEW(build)