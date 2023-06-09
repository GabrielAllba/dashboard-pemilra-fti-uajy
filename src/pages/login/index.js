import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Gradient from 'rgt'

import React from "react";
import Image from "next/image";
import classes from "./index.module.css";

const Login = () => {
    return (
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent style={{ padding: "2rem" }}>
              <p className={classes.welcome_to}>Welcome To</p>
              <h2 className={classes.title}>
                <Gradient dir="left-to-right" from="#DE631C" to="#E03221">
                  Pemilra FTI UAJY
                </Gradient>
              </h2>
              <p className={classes.welcome}>
                Welcome back! Login to access the Dashboard of Pemilra FTI UAJY!
              </p>
              <form
                action="/send-data-here"
                method="post"
                className={classes.form}
              >
                <div className={classes.form_label}>
                  <label className={classes.label} htmlFor="email">
                    <h2 className={classes.label_inner}>Email</h2>
                  </label>
                  <input
                    className={classes.input}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className={classes.form_label}>
                  <label className={classes.label} htmlFor="password">
                    <h2 className={classes.label_inner}>Password</h2>
                  </label>
                  <input
                    className={classes.input}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className={classes.form_label}>
                  <button className={classes.submit} type="submit">
                    Login
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Container>
    );
}

export default Login