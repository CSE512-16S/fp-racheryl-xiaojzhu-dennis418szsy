"""
Clean Data
"""
import pandas as pd
import numpy as np
import datetime

def createJulianDate():
	start = datetime.date(2001, 1, 1)
	end = datetime.date(2001, 12, 31)
	delta = datetime.timedelta(days = 1)
	counter = 1
	result = {}
	while start <= end:
		result[str(start.month) + '/' + str(start.day)] = counter
		start += delta
		counter += 1
	return result

def generateDateSite(year):
	date = range(1, 366, 1)
	site = range(1, 10, 1)
	result = [[year, x, y] for y in site for x in date]
	result = pd.DataFrame(result)
	result.columns = ['Year', 'JulianDay', 'Site']
	return result

def fillInSnow(data):
	marker = {}
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site)
		if key not in marker:
			marker[key] = {'Min':0, 'Max':0}
		if data.ix[i].Snow == 0:
			if marker[key]['Max'] != 0:
				marker[key]['Max'] = i
			elif marker[key]['Min'] == 0:
				marker[key]['Min'] = i
				marker[key]['Max'] = i	
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site)
		if i <= marker[key]['Max'] and i >= marker[key]['Min']:
			data.set_value(i, 'Snow', 0)
		else:
			data.set_value(i, 'Snow', 1)
	return data


def generateDateSiteSpecies(year):
	species = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	date = range(1, 366, 1)
	site = range(1, 10, 1)
	result = [[year, x, y, z] for z in species for y in site for x in date]
	result = pd.DataFrame(result)
	result.columns = ['Year', 'JulianDay', 'Site', 'Species']
	return result

def fillInFlower(data):
	marker = {}
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site) + '/' + data.ix[i].Species
		if key not in marker:
			marker[key] = {'Min':0, 'Max':0}
		if data.ix[i].Flower == 1:
			if marker[key]['Max'] != 0:
				marker[key]['Max'] = i
			elif marker[key]['Min'] == 0:
				marker[key]['Min'] = i
				marker[key]['Max'] = i	
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site) + '/' + data.ix[i].Species
		if i <= marker[key]['Max'] and i >= marker[key]['Min'] and marker[key]['Max'] != 0:
			data.set_value(i, 'Flower', 1)
		else:
			data.set_value(i, 'Flower', 0)
	return data

def fillInBud(data):
	marker = {}
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site) + '/' + data.ix[i].Species
		if key not in marker:
			marker[key] = {'Min':0, 'Max':0}
		if data.ix[i].Bud == '1':
			if marker[key]['Max'] != 0:
				marker[key]['Max'] = i
			elif marker[key]['Min'] == 0:
				marker[key]['Min'] = i
				marker[key]['Max'] = i	
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site) + '/' + data.ix[i].Species
		if i <= marker[key]['Max'] and i >= marker[key]['Min'] and marker[key]['Max'] != 0:
			data.set_value(i, 'Bud', 1)
		else:
			data.set_value(i, 'Bud', 0)
	return data

def fillInFruit(data):
	marker = {}
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site) + '/' + data.ix[i].Species
		if key not in marker:
			marker[key] = {'Min':0, 'Max':0}
		if data.ix[i].Fruit == '1':
			if marker[key]['Max'] != 0:
				marker[key]['Max'] = i
			elif marker[key]['Min'] == 0:
				marker[key]['Min'] = i
				marker[key]['Max'] = i	
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site) + '/' + data.ix[i].Species
		if i <= marker[key]['Max'] and i >= marker[key]['Min'] and marker[key]['Max'] != 0:
			data.set_value(i, 'Fruit', 1)
		else:
			data.set_value(i, 'Fruit', 0)
	return data

def fillInSeed(data):
	marker = {}
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site) + '/' + data.ix[i].Species
		if key not in marker:
			marker[key] = {'Min':0, 'Max':0}
		if data.ix[i].Seed == '1':
			if marker[key]['Max'] != 0:
				marker[key]['Max'] = i
			elif marker[key]['Min'] == 0:
				marker[key]['Min'] = i
				marker[key]['Max'] = i	
	for i in xrange(data.shape[0]):
		key = str(data.ix[i].Year) + '/' + str(data.ix[i].Site) + '/' + data.ix[i].Species
		if i <= marker[key]['Max'] and i >= marker[key]['Min'] and marker[key]['Max'] != 0:
			data.set_value(i, 'Seed', 1)
		else:
			data.set_value(i, 'Seed', 0)
	return data

if __name__ == "__main__":

	# Create Date - JulianDate Pairs
	julian = createJulianDate()

	# Basic Info
	dateSite2013 = generateDateSite(2013)
	dateSite2014 = generateDateSite(2014)
	dateSite2015 = generateDateSite(2015)

	dateSiteSpecies2013 = generateDateSiteSpecies(2013)
	dateSiteSpecies2014 = generateDateSiteSpecies(2014)
	dateSiteSpecies2015 = generateDateSiteSpecies(2015)

	# Read Raw Data
	raw = pd.read_csv('../data/raw.csv', header = 0)
	raw = pd.DataFrame(raw, columns = ['Year', 'JulianDay', 'Site', 'Species', 'Snow', 'Bud', 'Flower', 'Fruit', 'Seed'])


	# Extract and Clean Snow Info
	snow = pd.DataFrame(raw, columns = ['Year', 'JulianDay', 'Site', 'Snow'])
	snow = snow.groupby(['Year', 'JulianDay', 'Site'], as_index = False).max()
	snow2013 = snow[snow.Year == 2013]
	snow2014 = snow[snow.Year == 2014]
	snow2015 = snow[snow.Year == 2015]

	snow2013 = pd.merge(dateSite2013, snow2013, on = ['Year', 'JulianDay', 'Site'], how = 'left')
	snow2014 = pd.merge(dateSite2014, snow2014, on = ['Year', 'JulianDay', 'Site'], how = 'left')
	snow2015 = pd.merge(dateSite2015, snow2015, on = ['Year', 'JulianDay', 'Site'], how = 'left')

	snow2013.set_value(175, 'Snow', 0)
	snow2013.set_value(540, 'Snow', 0)
	snow2013.set_value(905, 'Snow', 0)
	snow2013.set_value(1270, 'Snow', 0)
	snow2013.set_value(1635, 'Snow', 0)
	snow2013.set_value(2000, 'Snow', 0)
	snow2013.set_value(2365, 'Snow', 0)
	snow2013.set_value(2730, 'Snow', 0)
	snow2013.set_value(3095, 'Snow', 0)

	snow2013.set_value(304, 'Snow', 0)
	snow2013.set_value(669, 'Snow', 0)
	snow2013.set_value(1034, 'Snow', 0)
	snow2013.set_value(1399, 'Snow', 0)
	snow2013.set_value(1764, 'Snow', 0)
	snow2013.set_value(2129, 'Snow', 0)
	snow2013.set_value(2494, 'Snow', 0)
	snow2013.set_value(2859, 'Snow', 0)
	snow2013.set_value(3224, 'Snow', 0)

	snow2014.set_value(180, 'Snow', 0)
	snow2014.set_value(545, 'Snow', 0)
	snow2014.set_value(910, 'Snow', 0)
	snow2014.set_value(1275, 'Snow', 0)
	snow2014.set_value(1640, 'Snow', 0)
	snow2014.set_value(2005, 'Snow', 0)
	snow2014.set_value(2370, 'Snow', 0)
	snow2014.set_value(2735, 'Snow', 0)
	snow2014.set_value(3100, 'Snow', 0)

	snow2014.set_value(310, 'Snow', 0)
	snow2014.set_value(675, 'Snow', 0)
	snow2014.set_value(1040, 'Snow', 0)
	snow2014.set_value(1405, 'Snow', 0)
	snow2014.set_value(1770, 'Snow', 0)
	snow2014.set_value(2135, 'Snow', 0)
	snow2014.set_value(2500, 'Snow', 0)
	snow2014.set_value(2865, 'Snow', 0)
	snow2014.set_value(3230, 'Snow', 0)

	snow2015.set_value(127, 'Snow', 0)
	snow2015.set_value(492, 'Snow', 0)
	snow2015.set_value(857, 'Snow', 0)
	snow2015.set_value(1222, 'Snow', 0)
	snow2015.set_value(1587, 'Snow', 0)
	snow2015.set_value(1952, 'Snow', 0)
	snow2015.set_value(2317, 'Snow', 0)
	snow2015.set_value(2682, 'Snow', 0)
	snow2015.set_value(3047, 'Snow', 0)

	snow2015.set_value(303, 'Snow', 0)
	snow2015.set_value(668, 'Snow', 0)
	snow2015.set_value(1033, 'Snow', 0)
	snow2015.set_value(1398, 'Snow', 0)
	snow2015.set_value(1763, 'Snow', 0)
	snow2015.set_value(2128, 'Snow', 0)
	snow2015.set_value(2493, 'Snow', 0)
	snow2015.set_value(2858, 'Snow', 0)
	snow2015.set_value(3223, 'Snow', 0)


	snow2013 = fillInSnow(snow2013)
	snow2014 = fillInSnow(snow2014)
	snow2015 = fillInSnow(snow2015)

	snow2013 = pd.DataFrame(snow2013, columns = ['JulianDay', 'Snow'])
	snow2014 = pd.DataFrame(snow2014, columns = ['JulianDay', 'Snow'])
	snow2015 = pd.DataFrame(snow2015, columns = ['JulianDay', 'Snow'])

	snow2013 = snow2013.groupby(['JulianDay'], as_index = False).min()
	snow2014 = snow2014.groupby(['JulianDay'], as_index = False).min()
	snow2015 = snow2015.groupby(['JulianDay'], as_index = False).min()

	snow2013.Snow = snow2013.Snow * 5
	snow2014.Snow = snow2014.Snow * 5
	snow2015.Snow = snow2015.Snow * 5

	snow2013['Melt'] = 5 - snow2013.Snow
	snow2014['Melt'] = 5 - snow2014.Snow
	snow2015['Melt'] = 5 - snow2015.Snow

	snow2013.to_csv('../data/snow2013.csv', header = True, index = False)
	snow2014.to_csv('../data/snow2014.csv', header = True, index = False)
	snow2015.to_csv('../data/snow2015.csv', header = True, index = False)


	# Extract and Clean Flowering Info
	flower = pd.DataFrame(raw, columns = ['Year', 'JulianDay', 'Site', 'Species', 'Flower'])
	flower = flower.groupby(['Year', 'JulianDay', 'Site', 'Species'], as_index = False).max()
	flower2013 = flower[flower.Year == 2013]
	flower2014 = flower[flower.Year == 2014]
	flower2015 = flower[flower.Year == 2015]

	flower2013 = pd.merge(dateSiteSpecies2013, flower2013, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')
	flower2014 = pd.merge(dateSiteSpecies2014, flower2014, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')
	flower2015 = pd.merge(dateSiteSpecies2015, flower2015, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')

	flower2013 = fillInFlower(flower2013)
	flower2014 = fillInFlower(flower2014)
	flower2015 = fillInFlower(flower2015)

	flower2013 = pd.DataFrame(flower2013, columns = ['JulianDay', 'Site', 'Species', 'Flower'])
	flower2014 = pd.DataFrame(flower2014, columns = ['JulianDay', 'Site', 'Species', 'Flower'])
	flower2015 = pd.DataFrame(flower2015, columns = ['JulianDay', 'Site', 'Species', 'Flower'])

	flower2013.to_csv('../data/flower2013.csv', header = True, index = False)
	flower2014.to_csv('../data/flower2014.csv', header = True, index = False)
	flower2015.to_csv('../data/flower2015.csv', header = True, index = False)

	# Extract Flowering Peak Info
	flowerPeak2013 = pd.DataFrame(flower2013, columns = ['JulianDay', 'Species', 'Flower'])
	flowerPeak2014 = pd.DataFrame(flower2014, columns = ['JulianDay', 'Species', 'Flower'])
	flowerPeak2015 = pd.DataFrame(flower2015, columns = ['JulianDay', 'Species', 'Flower'])

	flowerPeak2013 = flowerPeak2013.groupby(['JulianDay', 'Species'], as_index = False).sum()
	flowerPeak2014 = flowerPeak2014.groupby(['JulianDay', 'Species'], as_index = False).sum()
	flowerPeak2015 = flowerPeak2015.groupby(['JulianDay', 'Species'], as_index = False).sum()

	flowerPeak2013 = pd.DataFrame(flowerPeak2013, columns = ['JulianDay', 'Species', 'Flower'])
	tmp = flowerPeak2013.pivot('JulianDay', 'Species', 'Flower')
	flowerPeak2013 = pd.DataFrame(tmp.values)
	flowerPeak2013.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	flowerPeak2013['JulianDay'] = range(1, 366, 1)

	flowerPeak2014 = pd.DataFrame(flowerPeak2014, columns = ['JulianDay', 'Species', 'Flower'])
	tmp = flowerPeak2014.pivot('JulianDay', 'Species', 'Flower')
	flowerPeak2014 = pd.DataFrame(tmp.values)
	flowerPeak2014.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	flowerPeak2014['JulianDay'] = range(1, 366, 1)

	flowerPeak2015 = pd.DataFrame(flowerPeak2015, columns = ['JulianDay', 'Species', 'Flower'])
	tmp = flowerPeak2015.pivot('JulianDay', 'Species', 'Flower')
	flowerPeak2015 = pd.DataFrame(tmp.values)
	flowerPeak2015.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	flowerPeak2015['JulianDay'] = range(1, 366, 1)

	flowerPeak2013 = pd.DataFrame(flowerPeak2013, columns = ['JulianDay', 'ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI'])
	flowerPeak2014 = pd.DataFrame(flowerPeak2014, columns = ['JulianDay', 'ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI'])
	flowerPeak2015 = pd.DataFrame(flowerPeak2015, columns = ['JulianDay', 'ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI'])

	flowerPeak2013 = pd.merge(snow2013, flowerPeak2013, on = 'JulianDay', how = 'left')
	flowerPeak2014 = pd.merge(snow2014, flowerPeak2014, on = 'JulianDay', how = 'left')
	flowerPeak2015 = pd.merge(snow2015, flowerPeak2015, on = 'JulianDay', how = 'left')

	flowerPeak2013.to_csv('../data/flowerPeak2013.csv', header = True, index = False)
	flowerPeak2014.to_csv('../data/flowerPeak2014.csv', header = True, index = False)
	flowerPeak2015.to_csv('../data/flowerPeak2015.csv', header = True, index = False)


	# Extract and Clean Bud Info
	bud = pd.DataFrame(raw, columns = ['Year', 'JulianDay', 'Site', 'Species', 'Bud'])
	bud = bud.groupby(['Year', 'JulianDay', 'Site', 'Species'], as_index = False).max()
	bud2013 = bud[bud.Year == 2013]
	bud2014 = bud[bud.Year == 2014]
	bud2015 = bud[bud.Year == 2015]

	bud2013 = pd.merge(dateSiteSpecies2013, bud2013, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')
	bud2014 = pd.merge(dateSiteSpecies2014, bud2014, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')
	bud2015 = pd.merge(dateSiteSpecies2015, bud2015, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')

	bud2013 = fillInBud(bud2013)
	bud2014 = fillInBud(bud2014)
	bud2015 = fillInBud(bud2015)

	bud2013.to_csv('../data/bud2013.csv', header = True, index = False)
	bud2014.to_csv('../data/bud2014.csv', header = True, index = False)
	bud2015.to_csv('../data/bud2015.csv', header = True, index = False)

	# Extract Bud Peak Info
	budPeak2013 = pd.DataFrame(bud2013, columns = ['Year', 'JulianDay', 'Species', 'Bud'])
	budPeak2014 = pd.DataFrame(bud2014, columns = ['Year', 'JulianDay', 'Species', 'Bud'])
	budPeak2015 = pd.DataFrame(bud2015, columns = ['Year', 'JulianDay', 'Species', 'Bud'])

	budPeak2013 = budPeak2013.groupby(['Year', 'JulianDay', 'Species'], as_index = False).sum()
	budPeak2014 = budPeak2014.groupby(['Year', 'JulianDay', 'Species'], as_index = False).sum()
	budPeak2015 = budPeak2015.groupby(['Year', 'JulianDay', 'Species'], as_index = False).sum()

	budPeak2013 = pd.DataFrame(budPeak2013, columns = ['JulianDay', 'Species', 'Bud'])
	tmp = budPeak2013.pivot('JulianDay', 'Species', 'Bud')
	budPeak2013 = pd.DataFrame(b.values)
	budPeak2013.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	budPeak2013['JulianDay'] = range(1, 366, 1)
	budPeak2013['Year'] = 2013

	budPeak2014 = pd.DataFrame(budPeak2014, columns = ['JulianDay', 'Species', 'Bud'])
	tmp = budPeak2014.pivot('JulianDay', 'Species', 'Bud')
	budPeak2014 = pd.DataFrame(b.values)
	budPeak2014.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	budPeak2014['JulianDay'] = range(1, 366, 1)
	budPeak2014['Year'] = 2014

	budPeak2015 = pd.DataFrame(budPeak2015, columns = ['JulianDay', 'Species', 'Bud'])
	tmp = budPeak2015.pivot('JulianDay', 'Species', 'Bud')
	budPeak2015 = pd.DataFrame(b.values)
	budPeak2015.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	budPeak2015['JulianDay'] = range(1, 366, 1)
	budPeak2015['Year'] = 2015

	budPeak2013.to_csv('../data/budPeak2013.csv', header = True, index = False)
	budPeak2014.to_csv('../data/budPeak2014.csv', header = True, index = False)
	budPeak2015.to_csv('../data/budPeak2015.csv', header = True, index = False)


	# Extract and Clean Fruit Info
	fruit = pd.DataFrame(raw, columns = ['Year', 'JulianDay', 'Site', 'Species', 'Fruit'])
	fruit = fruit.groupby(['Year', 'JulianDay', 'Site', 'Species'], as_index = False).max()
	fruit2013 = fruit[fruit.Year == 2013]
	fruit2014 = fruit[fruit.Year == 2014]
	fruit2015 = fruit[fruit.Year == 2015]

	fruit2013 = pd.merge(dateSiteSpecies2013, fruit2013, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')
	fruit2014 = pd.merge(dateSiteSpecies2014, fruit2014, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')
	fruit2015 = pd.merge(dateSiteSpecies2015, fruit2015, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')

	fruit2013 = fillInFruit(fruit2013)
	fruit2014 = fillInFruit(fruit2014)
	fruit2015 = fillInFruit(fruit2015)

	fruit2013.to_csv('../data/fruit2013.csv', header = True, index = False)
	fruit2014.to_csv('../data/fruit2014.csv', header = True, index = False)
	fruit2015.to_csv('../data/fruit2015.csv', header = True, index = False)

	# Extract Fruit Peak Info
	fruitPeak2013 = pd.DataFrame(fruit2013, columns = ['Year', 'JulianDay', 'Species', 'Fruit'])
	fruitPeak2014 = pd.DataFrame(fruit2014, columns = ['Year', 'JulianDay', 'Species', 'Fruit'])
	fruitPeak2015 = pd.DataFrame(fruit2015, columns = ['Year', 'JulianDay', 'Species', 'Fruit'])

	fruitPeak2013 = fruitPeak2013.groupby(['Year', 'JulianDay', 'Species'], as_index = False).sum()
	fruitPeak2014 = fruitPeak2014.groupby(['Year', 'JulianDay', 'Species'], as_index = False).sum()
	fruitPeak2015 = fruitPeak2015.groupby(['Year', 'JulianDay', 'Species'], as_index = False).sum()

	fruitPeak2013 = pd.DataFrame(fruitPeak2013, columns = ['JulianDay', 'Species', 'Fruit'])
	tmp = fruitPeak2013.pivot('JulianDay', 'Species', 'Fruit')
	fruitPeak2013 = pd.DataFrame(b.values)
	fruitPeak2013.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	fruitPeak2013['JulianDay'] = range(1, 366, 1)
	fruitPeak2013['Year'] = 2013

	fruitPeak2014 = pd.DataFrame(fruitPeak2014, columns = ['JulianDay', 'Species', 'Fruit'])
	tmp = fruitPeak2014.pivot('JulianDay', 'Species', 'Fruit')
	fruitPeak2014 = pd.DataFrame(b.values)
	fruitPeak2014.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	fruitPeak2014['JulianDay'] = range(1, 366, 1)
	fruitPeak2014['Year'] = 2014

	fruitPeak2015 = pd.DataFrame(fruitPeak2015, columns = ['JulianDay', 'Species', 'Fruit'])
	tmp = fruitPeak2015.pivot('JulianDay', 'Species', 'Fruit')
	fruitPeak2015 = pd.DataFrame(b.values)
	fruitPeak2015.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	fruitPeak2015['JulianDay'] = range(1, 366, 1)
	fruitPeak2015['Year'] = 2015

	fruitPeak2013.to_csv('../data/fruitPeak2013.csv', header = True, index = False)
	fruitPeak2014.to_csv('../data/fruitPeak2014.csv', header = True, index = False)
	fruitPeak2015.to_csv('../data/fruitPeak2015.csv', header = True, index = False)


	# Extract and Clean Seed Info
	seed = pd.DataFrame(raw, columns = ['Year', 'JulianDay', 'Site', 'Species', 'Seed'])
	seed = seed.groupby(['Year', 'JulianDay', 'Site', 'Species'], as_index = False).max()
	seed2013 = seed[seed.Year == 2013]
	seed2014 = seed[seed.Year == 2014]
	seed2015 = seed[seed.Year == 2015]

	seed2013 = pd.merge(dateSiteSpecies2013, seed2013, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')
	seed2014 = pd.merge(dateSiteSpecies2014, seed2014, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')
	seed2015 = pd.merge(dateSiteSpecies2015, seed2015, on = ['Year', 'JulianDay', 'Site', 'Species'], how = 'left')

	seed2013 = fillInSeed(seed2013)
	seed2014 = fillInSeed(seed2014)
	seed2015 = fillInSeed(seed2015)

	seed2013.to_csv('../data/seed2013.csv', header = True, index = False)
	seed2014.to_csv('../data/seed2014.csv', header = True, index = False)
	seed2015.to_csv('../data/seed2015.csv', header = True, index = False)

	# Extract Seed Peak Info
	seedPeak2013 = pd.DataFrame(seed2013, columns = ['Year', 'JulianDay', 'Species', 'Seed'])
	seedPeak2014 = pd.DataFrame(seed2014, columns = ['Year', 'JulianDay', 'Species', 'Seed'])
	seedPeak2015 = pd.DataFrame(seed2015, columns = ['Year', 'JulianDay', 'Species', 'Seed'])

	seedPeak2013 = seedPeak2013.groupby(['Year', 'JulianDay', 'Species'], as_index = False).sum()
	seedPeak2014 = seedPeak2014.groupby(['Year', 'JulianDay', 'Species'], as_index = False).sum()
	seedPeak2015 = seedPeak2015.groupby(['Year', 'JulianDay', 'Species'], as_index = False).sum()

	seedPeak2013 = pd.DataFrame(seedPeak2013, columns = ['JulianDay', 'Species', 'Seed'])
	tmp = seedPeak2013.pivot('JulianDay', 'Species', 'Seed')
	seedPeak2013 = pd.DataFrame(b.values)
	seedPeak2013.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	seedPeak2013['JulianDay'] = range(1, 366, 1)
	seedPeak2013['Year'] = 2013

	seedPeak2014 = pd.DataFrame(seedPeak2014, columns = ['JulianDay', 'Species', 'Seed'])
	tmp = seedPeak2014.pivot('JulianDay', 'Species', 'Seed')
	seedPeak2014 = pd.DataFrame(b.values)
	seedPeak2014.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	seedPeak2014['JulianDay'] = range(1, 366, 1)
	seedPeak2014['Year'] = 2014

	seedPeak2015 = pd.DataFrame(seedPeak2015, columns = ['JulianDay', 'Species', 'Seed'])
	tmp = seedPeak2015.pivot('JulianDay', 'Species', 'Seed')
	seedPeak2015 = pd.DataFrame(b.values)
	seedPeak2015.columns = ['ANOC', 'CAPA', 'ERMO', 'ERPE', 'LIGR', 'LUAR', 'MIAL', 'PEBR', 'POBI', 'VASI']
	seedPeak2015['JulianDay'] = range(1, 366, 1)
	seedPeak2015['Year'] = 2015

	seedPeak2013.to_csv('../data/seedPeak2013.csv', header = True, index = False)
	seedPeak2014.to_csv('../data/seedPeak2014.csv', header = True, index = False)
	seedPeak2015.to_csv('../data/seedPeak2015.csv', header = True, index = False)



