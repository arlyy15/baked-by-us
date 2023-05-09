const handleFetch = async (url, options) => {
    try {
      const response = await fetch(url, options);
      const { status, statusText, ok } = response;
      if (!ok) return [null, { status, statusText }];
  
      const content = (status === 204) || await response.json();
      return [content, null];
    } catch (error) {
      return [null, error];
    }
  };

  const createBG = async (url, form) => {
    const formData = new FormData(form);
    const options = getFetchOptions(Object.fromEntries(formData.entries()));
    const [_response, err] = await handleFetch(url, options);
    if (err) {
      form.reset();
      return alert('Something went wrong');
    }
    window.location.assign('/user.html');
  };
  Object.assign(window,{
    createBG

  })