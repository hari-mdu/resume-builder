import { Stack, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { GitHub } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import Navbar from '../Components/NavBar'

// the briefing of the website  nothing much only an overview of the resume@builder

export default function ButtonMUI() {
  return (
    <>
      <Navbar active={""}/>
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h1 className="template-header-title">Resume-Builder</h1>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            Resume@Builder is a free web application where you can build your
            resume instantly. Create a professional resume in minutes with ample
            of templates available. You can also upload profile avatar to the
            resumes. Once you have filled the resume fields, you get a preview
            and download option. Click download to have it to your local hard
            drive. You can update your resumes which you have created earlier
            and delete them too.
          </Typography>
          <Stack
            sx={{
              width: "30%",
              placeSelf: "center",
            }}
          >
            <img
              src={"https://www.blogtyrant.com/wp-content/uploads/2011/02/best-about-us-pages.png"}
              alt="img"
             style={{height:{xs : '100px'}}}
            />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
              paddingBottom: "15px",
            }}
          >
            Kindly Share in your circle
          </Typography>
          <Box className="icons" >
            <Link to="https://www.instagram.com">
              <Instagram
                sx={{ fontSize: "40px"}}
                color="error"
              />
            </Link>

            <Link to="https://www.facebook.com">
              <FacebookOutlinedIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>

            <Link to="https://www.linkedin.com/in/hari-prakash-818b42256/">
              <LinkedInIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>
            <Link to="https://web.whatsapp.com">
              <WhatsAppIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="success"
              />
            </Link>
            <Link to="https://www.twitter.com">
              <TwitterIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="info"
              />
            </Link>
            <Link to="https://github.com/hari-mdu/">
              <GitHub
                sx={{ fontSize: "40px", paddingLeft: "15px", color: "black" }}
              />
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
