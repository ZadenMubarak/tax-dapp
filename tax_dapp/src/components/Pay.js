const provider = getProvider(); // see "Detecting the Provider"
try {
    const resp = await provider.request({ method: "connect" });
    console.log(resp.publicKey.toString());
    // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
} catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
}