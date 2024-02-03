import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import H from '@here/maps-api-for-javascript';

const Map = ({apiKey, location, language}) => {
    const mapRef = useRef(null);
    const map = useRef(null);
    const platform = useRef(null)

    useEffect(
        () => {
          // Check if the map object has already been created
          if (!map.current) {
            // Create a platform object with the API key
            platform.current = new H.service.Platform({ apiKey });
            // Create a new Raster Tile service instance
            const rasterTileService = platform.current.getRasterTileService({
              queryParams: {
                style: "explore.day",
                size: 512,
                lang: language
              },
            });
            // Creates a new instance of the H.service.rasterTile.Provider class
            // The class provides raster tiles for a given tile layer ID and pixel format
            const rasterTileProvider = new H.service.rasterTile.Provider(
              rasterTileService
            );
            // Create a new Tile layer with the Raster Tile provider
            const rasterTileLayer = new H.map.layer.TileLayer(rasterTileProvider);
            // Create a new map instance with the Tile layer, center and zoom level
            const newMap = new H.Map(mapRef.current, rasterTileLayer, {
              pixelRatio: window.devicePixelRatio,
              center: {
                lat: location.lat,
                lng: location.lng,
              },
              zoom: 5,
            });
      
            // Add panning and zooming behavior to the map
            const behavior = new H.mapevents.Behavior(
              new H.mapevents.MapEvents(newMap)
            );
      
            // Set the map object to the reference
            map.current = newMap;
          }
        },
        // Dependencies array
        [apiKey, language]
      );
      
      // Return a div element to hold the map
      return <div style={ { width: "100%", height: "500px" } } ref={mapRef} />;
   }

   Map.propTypes = {
    apiKey: PropTypes.string.isRequired,
    location: PropTypes.objectOf({
        lat: PropTypes.string,
        lng: PropTypes.string
    }).isRequired,
    language: PropTypes.string.isRequired
   }

   export default Map;