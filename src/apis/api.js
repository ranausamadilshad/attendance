import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkZhaXNhbCBTZW5pb3IgRGV2ZWxvcGVyIiwiZW1haWwiOiJmbnMyMTczMDJAZ21haWwuY29tIiwiZ2VuZGVyIjoiTUFMRSIsImRvYiI6IjIwMjEtMDktMDFUMDA6MDA6MDAuMDAwWiIsInBob25lTm8iOiIzMDEzNTk2Mjc4Iiwiam9pbmluZ0RhdGUiOiIyMDIxLTA5LTAzVDAwOjAwOjAwLjAwMFoiLCJhZGRyZXNzIjoiQW5hcmthbGkgQmF6YXIgIiwiZGVwYXJ0bWVudElkIjo5LCJzaGlmdElkIjozLCJqb2JUaXRsZUlkIjo2LCJpbWFnZSI6bnVsbCwiaWF0IjoxNjMxMTY1MzQ2fQ.XjTj7WVPA8Sqf9eODHZxpZo5DVMq4Z4wTEEo6SCB708";

export const config = {
  headers: {
    Authorization: token,
  },
};
