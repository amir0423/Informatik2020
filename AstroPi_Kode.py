from sense_hat import SenseHat
import datetime
from time import sleep
sense = SenseHat()



start_time = datetime.datetime.now()
now_time = datetime.datetime.now()
duration = datetime.timedelta(seconds=10)
#^^accel test
#*pil ned* *pil ned* lokation
import ephem

name = "ISS (ZARYA)"
line1 = "1 25544U 98067A   20320.87879749 +.00001579 +00000-0 +36748-4 0  9990"
line2 = "2 25544 051.6460 317.8748 0001741 054.1843 015.8230 15.49036599255530"

iss = ephem.readtle(name, line1, line2)
iss.compute()

sun = ephem.Sun()
sun.compute()

moon = ephem.Moon()
moon.compute()


#print('ISS')
#print(iss.ra, iss.dec)
#print('moon')
#print(moon.ra, moon.dec)
#print('sun')
#print(sun.ra, sun.dec)

# vinkel beregnes ved oversættelse til radian med repr
## nedenstående giver den ækvatoriale vinkel mellem solen og ISS
vinkel = float(repr(iss.ra))-float(repr(sun.ra))
#print('vinkel mellem Solen og ISS er {:1.6f} radian.'.format(vinkel))

#^^Lokation
# *pil ned* *pil ned* accel test

with open("gemData.csv", "w") as file:
    file.write("time , accelerationx,accelerationy,accelerationz, ISS ,moon ,sun , vinkelISSSOL \n")

while now_time < start_time + duration:
    accel_only = sense.get_accelerometer_raw()
    now_time= datetime.datetime.now() 

    print(accel_only['x'])
    sleep(1)
    sense.show_message("I is running",text_colour=(100,255,255))
    with open("gemData.csv","a") as file:
        file.write("%s, %s,%s,%s, %s,%s,%s,%s,%s,%s, %s \n" % (now_time, accel_only['x'],accel_only['y'], accel_only['z'],iss.ra, iss.dec, moon.ra, moon.dec, sun.ra, sun.dec, '{:1.6f}'.format(vinkel)))
    
    
sleep(1)