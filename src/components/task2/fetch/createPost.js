const createPost = async(body) => {
  try {
    const response = await fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data = response;
    // await .json();
    // console.log('Создан пост с ID:', data.id);
    // console.log('Полный ответ:', data);
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

export default createPost;

// createPost();