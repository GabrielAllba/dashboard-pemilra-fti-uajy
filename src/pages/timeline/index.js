import { CardContent, Grid } from "@mui/material";
import Layout from "../../../components/Layout";
import React, { useState } from "react";
import TimelineComp from "../../../components/TimelineComp";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {Card} from "@mui/material";
import classes from './index.module.css'
import {Checkbox} from "@mui/material";

const Timeline = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} key="1">
          <div className="box_custom">
            <h2>Timeline</h2>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} key="1">
          <div className="box_custom">
            <TimelineComp></TimelineComp>
            <TimelineComp></TimelineComp>
            <TimelineComp></TimelineComp>
            <TimelineComp></TimelineComp>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} key="1">
          <Card variant="outlined">
            <CardContent>
              <form
                action="/send-data-here"
                method="post"
                className={classes.form}
              >
                <div className={classes.form_label}>
                  <label className={classes.label} htmlFor="nama_role">
                    <h2 className={classes.label_inner}>Nama Aktivitas</h2>
                  </label>
                  <input
                    className={classes.input}
                    type="text"
                    id="nama_aktivitas"
                    name="nama_aktivitas"
                    placeholder="Masukkan Nama Aktivitas"
                  />
                </div>
                <div className={classes.form_label}>
                  <label className={classes.label} htmlFor="deskripsi">
                    <h2 className={classes.label_inner}>Deskripsi</h2>
                  </label>
                  <textarea className={classes.textarea}>
                    
                  </textarea>
                </div>

                <div className={classes.form_label}>
                  <label className={classes.label} htmlFor="tanggal_activity">
                    <h2 className={classes.label_inner}>Tanggal aktivitas</h2>
                  </label>
                  <input
                    className={classes.input}
                    type="date"
                    id="tanggal_activity"
                    name="tanggal_activity"
                    placeholder="Masukkan Tanggal Aktivitas"
                  />
                </div>

                <div className={classes.form_label}>
                  <button className={classes.submit} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Timeline;
