import SecondaryButton from '../SecondaryButton'
import ThirdButton from '../ThirdButton'
import classes from './index.module.css'
import { useState } from 'react'
const TimelineComp = props => {
  const [description, setDesription] = useState(false)
  const showDescriptionHandler = () => {
    setDesription(true)
  }
  const closeShowDescription = () => {
    setDesription(false)
  }
    return (
      <div className={classes.container}>
        <div className={classes.kiri}>
          <div className={classes.bulat}></div>
          <div className={classes.garis}></div>
        </div>
        <div className={classes.kanan}>
          <h3 className={classes.title}>Debat Pemilra</h3>
          <div className={classes.tanggal}>
            <p>28 Oktober 2023</p>
          </div>
          {!description && (
            <div
              onClick={showDescriptionHandler}
              className={classes.showdescription}
            >
              <ThirdButton>
                <p>Show Desrciption</p>
              </ThirdButton>
            </div>
          )}

          {description && (
            <div>
              <p>Ini adalah deskripsi dari aktivitas yang akan dilaksanakan</p>
              <div
                className={classes.showdescription}
                onClick={closeShowDescription}
              >
                <SecondaryButton>Close</SecondaryButton>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default TimelineComp
