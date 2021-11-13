import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { clearLoggedUser, setLoggedUser } from '../../../store/modules/auth/reducer';
import AuthService from '../../../services/auth';
import { ICookie } from '../../../dtos/Cookies';

const ValidateToken = (Component) => {
  const Validation = (props) => {
    const dispatch = useDispatch()
    let cookie = Cookie.get('@api-data')
    let apiData: ICookie = cookie ? JSON.parse(cookie) : null
    if (apiData) {
      AuthService.validateToken(apiData).then(user => {
        if (user) {
          dispatch(setLoggedUser(user))
        } else {
          dispatch(clearLoggedUser())
        }
      })
    } else {
      dispatch(clearLoggedUser())
    }

    return <Component {...props} />;
  }

  if (Component.getServerSideProps) {
    Validation.getServerSideProps = Component.getServerSideProps;
  }

  return Validation;
}

export default ValidateToken;