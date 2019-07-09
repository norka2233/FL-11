  const userData = {
    email: 'user@gmail.com',
    password: 'UserPass'
  };
  const adminData = {
    email: 'admin@gmail.com',
    password: 'AdminPass'
  }
  const dataLength = {
    emailLength: 6,
    passwordLength: 5
  }

const email = prompt('Please, enter your email.', '');

if(email === '' && email === null) {
  alert('Canceled');
} else if (email.length < dataLength.emailLength) {
  alert('I dont know any emails having name length less than 6 symbols')
} else if (email === userData.email || email === adminData.email) {
  const password = prompt('Please, enter your password.', '');
  if (password === '' || password === null) {
    alert('Canceled');
  } else if (email === userData.email && password === userData.password ||
             email === adminData.email && password === adminData.password) {
    const changePassword = confirm('Do you want to change your password?');
    if (changePassword) {
      const oldPassword = prompt('Please enter your old password.', '');
      if (oldPassword === '' || oldPassword === null) {
        alert('Canceled')
      } else if (oldPassword === password) {
        const newPassword = prompt('Please, enter new password.', '');
        if (newPassword < dataLength.passwordLength) {
          alert('It’s too short password. Sorry.');
        } else {
          const newPasswordSecond = prompt('Please, enter your new password again.', '');
          if (newPasswordSecond === newPassword) {
            alert('You have successfully changed your password.');
          } else if (newPasswordSecond !== newPassword) {
            alert('You wrote the wrong password.');
          } else {
            alert('Canceled');
          }
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert('You failed.');
    }
  }else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you.');
}
