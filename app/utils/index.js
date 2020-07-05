import { Linking, Alert, Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import awsImg from '../assets/images/aws-logo.png';
import destructuringImg from '../assets/images/destructuring.jpeg';
import ebonyLife from '../assets/images/ebony.png';
import smartMeter from '../assets/images/smartmeter.png';
import qwikfx from '../assets/images/QwikFx.png';
import indigo from '../assets/images/indigo-app.png';

const alphaNumericRegex = /^[A-Z a-z 0-9]+$/;
const phoneNumberRegexUs = /^[().\- ]{0,}[0-9]{3}[().\- ]{0,}[0-9]{3}[().\- ]{0,}[0-9]{4}[().\- ]{0,}$/;
const phoneNumberRegexNig = /^[0]\d{10}$/;

export const dialPhoneNumber = number => {
  const phoneNumber = Platform.OS === 'ios' ? `telprompt:${number}` : `tel:${number}`;

  Linking.canOpenURL(phoneNumber).then(supported => {
    if (supported) {
      Linking.openURL(phoneNumber).catch(() => null);
    } else {
      Alert.alert(`Unable to dial Phone number - ${(number)}`);
    }
  }).catch(err => console.log(err));
};

export const isEmpty = (obj) => {
  if (!obj) {
    return true;
  }
  if (Object.keys(obj).length) {
    return false;
  }
  return true;
};

export const _isStrEmpty = (str) => !str || str.length === 0;

export const _validatePassword = password => {
  if (password && password.length >= 6 && alphaNumericRegex.test(password)) {
    return true;
  }
  return false;
};

export const _validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const _validatePhoneNumber = (phoneNumber) => {
  if (
    phoneNumberRegexUs.test(phoneNumber) ||
    phoneNumberRegexNig.test(phoneNumber)
  ) {
    return true;
  }
};

export const _isNumber = (string) => {
  const regex = /^\d+$/;
  return regex.test(string);
};

export const isFloat = (n) =>
  parseFloat(n.match(/^-?\d*(\.\d+)?$/)) > 0;

export const countDownTime = time => {
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  const minutes = Math.floor(time / 60);
  return `${minutes}:${seconds}`;
};

export const isArrayEmpty = (arr) => !arr || arr.length === 0;

export const convertToSelectOptions = arr => arr.map(item => ({
  value: String(item.id),
  label: item.name
}));

export const getFormattedTime = date => {
  const formattedDate = new Date(date);
  let hours = formattedDate.getHours();
  let minutes = formattedDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes}${ampm}`;
};

export const sortByDate = (arr, dateProp) => {
  const sorted = arr.sort((a, b) => {
    return new Date(a[dateProp]) < new Date(b[dateProp])
      ? -1
      : new Date(a[dateProp]) > new Date(b[dateProp])
        ? 1
        : 0;
  });
  return sorted;
};

export const getRecent = (arr, param) => {
  const _1WeekOld = new Date();
  const lastWeek = _1WeekOld.getDate() - 7;
  _1WeekOld.setDate(lastWeek);
  const recent = arr.filter(item => new Date(item[param]) >= _1WeekOld);
  const older = arr.filter(item => new Date(item[param]) <= _1WeekOld);

  return { recent, older };
};

export const notifySuccess = message =>
  showMessage({
    message,
    type: 'success'
  });

export const notifyError = message =>
  showMessage({
    message,
    type: 'danger'
  });

export const getCurrentDateAppointments = arr => {
  const today = new Date().toISOString().split('T')[0];

  return arr.filter(item => {
    const apptDate = item.start_time.split('T')[0];
    return apptDate === today;
  });
};

export const formatDateOfBirth = date => {
  const res = date.split('-');
  return new Date(`${res[1]}-${res[0]}-${res[2]}`);
};

export const formatDate = (date) => {
  return `${date.getDate()}/${date.getMonth() - 1}/${date.getFullYear()}`;
};

export const formatMaxStrLength = (str, max) => {
  if (!str) {
    return '';
  }

  if (str.length > max) {
    return `${str.substring(0, max - 3)}...`;
  }
  return str;
};

export const projectsOptions = [
  {
    id: 1,
    img: ebonyLife,
    title: 'EbonyLife',
    uri: 'https://ebonylife.com/'
  },
  {
    id: 2,
    img: smartMeter,
    title: 'Lagos Smart Meter',
    uri: 'https://smart-meter.netlify.com/'
  },
  {
    id: 3,
    img: qwikfx,
    title: 'Qwikfx',
    uri: 'https://qwikfx.com/'
  },
  {
    id: 4,
    img: indigo,
    title: 'Indigo',
    uri: 'https://staging.indigoemr.com/login'
  },
];

export const blogPostOptions = [
  {
    id: 1,
    img: awsImg,
    title: 'Introduction to Cloud Security with AWS',
    uri: 'https://medium.com/datadriveninvestor/introduction-to-cloud-security-with-aws-13d537ac5d03?source=---------4------------------'
  },
  {
    id: 2,
    img: destructuringImg,
    title: 'Demystifying Modern Destructuring in JavaScript',
    uri: 'https://medium.com/better-programming/demystifying-modern-destructuring-in-javascript-918295756b1f?source=---------2------------------'
  }
];

export const drawerOptions = [
  {
    id: 1,
    icon: 'home-outline',
    label: 'Home',
    screen: 'Home'
  },
  {
    id: 2,
    icon: 'accusoft',
    label: 'Blog',
    screen: 'Blog'
  },
  {
    id: 3,
    icon: 'language-html5',
    label: 'Skills',
    screen: 'Skills'
  },
  {
    id: 4,
    icon: 'laptop-mac',
    label: 'Projects',
    screen: 'Projects'
  },
];

export const skillsOptions = [
  {
    id: 1,
    icon: 'language-html5',
    label: 'HTML'
  },
  {
    id: 2,
    icon: 'language-css3',
    label: 'Cascading Stylesheet'
  },
  {
    id: 3,
    icon: 'language-javascript',
    label: 'Javascript'
  },
  {
    id: 4,
    icon: 'react',
    label: 'React',
  },
  {
    id: 5,
    icon: 'aws',
    label: 'Cloud Computing'
  },
];
