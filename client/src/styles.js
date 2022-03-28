import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontFamily: `Cursive, "Brush Script MT", "Lucida Handwriting"`,
    color: "rgba(0, 102, 153, 1)",
    fontSize: "1vh",
  },
  image: {
    marginLeft: "15px",
  },
}));
