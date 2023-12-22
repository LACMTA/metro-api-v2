def convert_to_geojson(data):
    geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": row['geometry'],
                "properties": {key: value for key, value in row.items() if key != 'geometry'},
            } for row in data
        ]
    }
    return geojson

