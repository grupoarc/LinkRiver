javascript:
    data=JSON.stringify({"url":location.href, "title":document.title});
    url="http://huginn.in.safernet.link/users/1/web_requests/2/incoming_link_secret_string";

    f     = document.createElement('iframe');
    fname = (+((''+Math.random()).substring(2))).toString(36);

    f.setAttribute('name', fname);
    f.setAttribute('id', fname);
    f.setAttribute('style', 'width:0;height:0;border:none;margin:none;padding:none;position:absolute;');

    document.body.appendChild(f);

        frame = window.frames[fname]; 
        doc   = frame.document;
        form  = doc.createElement('form');
        text  = doc.createElement('textarea');

    text.setAttribute('name', 'payload');
    text.appendChild(doc.createTextNode(data));

    form.setAttribute('action', url);
    form.setAttribute('method', 'post');
    form.appendChild(text);

    doc.body.appendChild(form);

    doc.forms[0].submit();

