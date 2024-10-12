// Create a function `logCoordinates` that accepts a tuple of latitude and longitude. 
// - The latitude is required, but the longitude is optional. 
// - Use a type guard to log different messages based on whether the longitude is provided.
// - Return type: void.



function logCoordinates(coords: [number, number?]): void {

    let result: string = `Latitude: ${coords[0]} `
    if (coords[1]) {
        result = `Latitude: ${coords[0]}, Longitude: ${coords[1]} `
    }
    console.log(result)
}

// Expected output:
logCoordinates([40.7128, -74.0060]) // "Latitude: 40.7128, Longitude: -74.0060"
logCoordinates([34.0522]) // "Latitude: 34.0522"