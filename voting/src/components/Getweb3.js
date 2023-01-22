import Web3 from 'web3';
const Getweb3 = async () => {
    return new Promise(async (resolve, reject) => {
        console.log('hello window')



        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                console.log('hello if')
                await window.ethereum.enable();
                resolve(web3);
            } catch (error) {
                console.log(error.message);
                reject(error);
            }
        }

        else if (window.web3) {
            try {
                console.log('hello if else')
                const web3 = window.web3;
                console.log("injected web3 detected");
                resolve(web3);
            } catch (error) {
                console.log(error);
                reject(error);
            }

        }
        else {
            console.log("not detected");
        }






    })

}


export default Getweb3;