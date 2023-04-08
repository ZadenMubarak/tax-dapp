const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana;
  
      if (provider?.isPhantom) {
        return provider;
      }
    }
  
    window.open('https://phantom.app/', '_blank');
  };

const isPhantomInstalled = window.phantom?.solana?.isPhantom

const provider = getProvider(); // see "Detecting the Provider"

const Connect = async() =>{

    try {
        const resp = await provider.request({ method: "connect" });
        console.log(resp.publicKey.toString());
        // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
    } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
    }

}


export default Connect;