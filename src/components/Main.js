import React, {useContext} from 'react';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({cardData, setCardData}) {
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext); // Assuming context provides currentUser and setCurrentUser

  return (
    <main>
      <section className='profile'>
        <div className='profile__container'>
          <EditAvatarPopup
            avatar={currentUser.avatar ? currentUser.avatar : '#'}
            setUserData={setCurrentUser} // Assuming this is the correct prop for setting user data
          />
          <div className='profile__info'>
            <div className='profile__name-container'>
              <h1 className='profile__name'>
                {currentUser.nama ? currentUser.nama : '....'}
              </h1>
              <EditProfilePopup
                nama={currentUser.nama}
                title={currentUser.title}
                setUserData={setCurrentUser} // Assuming this is the correct prop for setting user data
              />
            </div>
            <p className='profile__title'>
              {currentUser.title ? currentUser.title : '....'}
            </p>
          </div>
          <AddPlacePopup setCardData={setCardData} />
        </div>
      </section>
      <section className='card'>
        <div className='card__container'>
          {cardData.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              card_id={card._id}
              owner_id={card.owner._id}
              setCardData={setCardData}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
