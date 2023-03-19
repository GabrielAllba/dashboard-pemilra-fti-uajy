import classes from './index.module.css'

const Timeline = (props) => {
    return (
      <div className={classes.out_outer}>
        <div className={classes.outer}>
          <div className={classes.inner}>
            <div className={classes.num_container}>
              <p className={classes.number}>1</p>
            </div>
          </div>
          <div className={classes.description}>
            <h4 className={classes.title}>Tentukan periode</h4>
            <p className={classes.desc}>
              Untuk menentukan periode, kamu dapat mengakses menu periode yang
              berada di dalam submenu konten
            </p>
          </div>
        </div>
        <div className={classes.outer}>
          <div className={classes.inner}>
            <div className={classes.num_container}>
              <p className={classes.number}>2</p>
            </div>
          </div>
          <div className={classes.description}>
            <h4 className={classes.title}>Tentukan periode</h4>
            <p className={classes.desc}>
              Untuk menentukan periode, kamu dapat mengakses menu periode yang
              berada di dalam submenu konten
            </p>
          </div>
        </div>
        <div className={classes.outer}>
          <div className={classes.inner}>
            <div className={classes.num_container}>
              <p className={classes.number}>3</p>
            </div>
          </div>
          <div className={classes.description}>
            <h4 className={classes.title}>Tentukan periode</h4>
            <p className={classes.desc}>
              Untuk menentukan periode, kamu dapat mengakses menu periode yang
              berada di dalam submenu konten
            </p>
          </div>
        </div>
        <div className={classes.outer}>
          <div className={classes.inner}>
            <div className={classes.num_container}>
              <p className={classes.number}>4</p>
            </div>
          </div>
          <div className={classes.description}>
            <h4 className={classes.title}>Tentukan periode</h4>
            <p className={classes.desc}>
              Untuk menentukan periode, kamu dapat mengakses menu periode yang
              berada di dalam submenu konten
            </p>
          </div>
        </div>
      </div>
    );
}

export default Timeline