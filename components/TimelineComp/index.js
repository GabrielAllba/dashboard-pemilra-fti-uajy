import classes from './index.module.css'

const TimelineComp = props => {
    return (
      <div className={classes.container}>
        <div className={classes.kiri}>
            <div className={classes.bulat}></div>
            <div className={classes.garis}></div>
        </div>
        <div className={classes.kanan}>
          <h3 className={classes.title}>Aktivitas</h3>
          <div className={classes.tanggal}>
            <p>28 Oktober 2015</p>
          </div>
          <div className={classes.showdescription}>
            <p>Show Desrciption</p>
          </div>
        </div>
      </div>
    );
}

export default TimelineComp
