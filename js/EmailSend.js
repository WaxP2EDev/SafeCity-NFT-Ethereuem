const sendEmail = async (subject,message,to) =>{
    const ClientEmail = 'safedevtemp@gmail.com';
    const ClientAppPassword = 'gstoblujmmwvybzz';
    await Email.send({
        Host : 'smtp.gmail.com',
        Username : ClientEmail,
        Password : ClientAppPassword,
        To : to,
        From : ClientEmail,
        Subject : subject,
        Body : message,

    }).then(message=>{
        console.log({
            from : 'safedevtemp@gmail.com',
            to : to,
            subject : subject,
            message : message,
        });
        console.warn('message sended!');
    })
}