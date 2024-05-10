import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

async function emailTime(from:string, email:string, message:string) {

    let result:EmailJSResponseStatus = {} as EmailJSResponseStatus;

    await emailjs.send("service_chob70v","template_mfc24xx",{
        from_name: from,
        email_id: email,
        message: message,
    }, "ycpRtGXuSVJWGIo1d")
    .then((res) => {
        result = res;
    });

    console.log(result); 
    return result;
}

export {emailTime}