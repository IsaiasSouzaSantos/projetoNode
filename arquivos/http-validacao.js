import fetch from "node-fetch";

async function checaStatus(arrayURL){
    const arrayStatus = await Promise.all (arrayURL.map(async url => {
        const res = await fetch(url)
        return res.status;
    }))
    return arrayStatus;
}


function regaArrayDeURL(arrayLinks){
    return arrayLinks.map(objetolink => Object.values(objetolink).join());
}


async function validarURL(arrayLinks){
    const links = regaArrayDeURL(arrayLinks);
    const statuslinks = await checaStatus(links);
    return statuslinks;
}

export default validarURL;