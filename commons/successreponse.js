// // POST sign up
// // localhost:5000/auth/signup
// // {"email":"cybersgenii@gmail.com",
// // "password":"abcABC123.",
// // "confirm_password":"abcABC123.",
// // "phone":"+234-8188266175"}

// // {
// //     "message": "User created successfully kindly check your inbox to verify your email",
// //     "data": {
// //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTlkZmEwOTQyMjJkNjczMWUxYjUxYSIsImlhdCI6MTY4NzgwNTg2MCwiZXhwIjoxNjg4MjM3ODYwfQ.T1Kv-hlfqISPRtrRdK741afTynjsba2-eV4xuaCdtiQ"
// //     },
// //     "success": true
// // }

// // localhost:5000/auth/login
// // {
// //     "email":"cybersgenii@gmail.com",
// //     "password":"abcABC123."
// // }

// // {
// //     "success": true,
// //     "message": "User logged in successfully",
// //     "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTlkZmEwOTQyMjJkNjczMWUxYjUxYSIsImlhdCI6MTY4NzgwNjA2NCwiZXhwIjoxNjg4MjM4MDY0fQ.PWwGOhRAJYVdFZnAxWEbcm8pMBTIcjsP5GA-9yt787M"
// // }

// // category
// // GET get category
// // https://jenny-pnw8.onrender.com/admin/category/
// // {
// //     "message": "gotten one data successfully",
// //     "data": [
// //         {
// //             "_id": "6499f325e915f50b66221cd8",
// //             "name": "LIPCARE",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810871/cybersgenii%40gmail/image/kuwqq7rdpyg6pp8vmxyu.jpg",
// //             "created_at": "2023-06-26T20:20:53.806Z",
// //             "updated_at": "2023-06-26T20:20:53.806Z"
// //         },
// //         {
// //             "_id": "6499f315e915f50b66221cd5",
// //             "name": "MASKS",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810854/cybersgenii%40gmail/image/s5oibgnumzukewhc8cga.jpg",
// //             "created_at": "2023-06-26T20:20:37.409Z",
// //             "updated_at": "2023-06-26T20:20:37.409Z"
// //         },
// //         {
// //             "_id": "6499f300e915f50b66221cd2",
// //             "name": "SERUMS",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810835/cybersgenii%40gmail/image/p6dfqor18ynr7kol3jtj.jpg",
// //             "created_at": "2023-06-26T20:20:16.027Z",
// //             "updated_at": "2023-06-26T20:20:16.027Z"
// //         },
// //         {
// //             "_id": "6499f2e3e915f50b66221ccf",
// //             "name": "TONERS",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810807/cybersgenii%40gmail/image/yr9iicy6gpzbpvfmqh36.jpg",
// //             "created_at": "2023-06-26T20:19:47.836Z",
// //             "updated_at": "2023-06-26T20:19:47.836Z"
// //         },
// //         {
// //             "_id": "6499f2d1e915f50b66221ccc",
// //             "name": "CLEANSERS",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810788/cybersgenii%40gmail/image/vou7xakegoavlb0vabik.jpg",
// //             "created_at": "2023-06-26T20:19:29.123Z",
// //             "updated_at": "2023-06-26T20:19:29.123Z"
// //         },
// //         {
// //             "_id": "6499f18fe915f50b66221cc7",
// //             "name": "LOTION",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810466/cybersgenii%40gmail/image/lprsfzb72ytdwcokyhx6.jpg",
// //             "created_at": "2023-06-26T20:14:07.436Z",
// //             "updated_at": "2023-06-26T20:14:07.436Z"
// //         }
// //     ],
// //     "success": true,
// //     "doc_length": 6
// // },


// // GET get_one category
// // localhost:5000/admin/category/6499f315e915f50b66221cd5
// // {
// //     "message": "gotten one data successfully",
// //     "data": {
// //         "_id": "6499f315e915f50b66221cd5",
// //         "name": "MASKS",
// //         "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810854/cybersgenii%40gmail/image/s5oibgnumzukewhc8cga.jpg",
// //         "created_at": "2023-06-26T20:20:37.409Z",
// //         "updated_at": "2023-06-26T20:20:37.409Z",
// //         "__v": 0
// //     },
// //     "success": true
// // }

// // GET get sub caterory
// // localhost: 5000 / admin / sub - category;
// // {
// //     "message": "gotten one data successfully",
// //     "data": [
// //         {
// //             "_id": "6499fa23724c6d1d02be957f",
// //             "name": "LIP MASK",
// //             "category": "6499f325e915f50b66221cd8",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812662/cybersgenii%40gmail/image/yxiiqy26lu1rbvr514wu.jpg",
// //             "created_at": "2023-06-26T20:50:43.152Z",
// //             "updated_at": "2023-06-26T20:50:43.152Z"
// //         },
// //         {
// //             "_id": "6499fa14724c6d1d02be957c",
// //             "name": "LIP SCUBS",
// //             "category": "6499f325e915f50b66221cd8",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812647/cybersgenii%40gmail/image/ucvhlc7350ph1vmvrmex.jpg",
// //             "created_at": "2023-06-26T20:50:28.820Z",
// //             "updated_at": "2023-06-26T20:50:28.820Z"
// //         },
// //         {
// //             "_id": "6499f9f9724c6d1d02be9579",
// //             "name": "LIP BALM",
// //             "category": "6499f325e915f50b66221cd8",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812621/cybersgenii%40gmail/image/asnwipttvocobevfzs3t.jpg",
// //             "created_at": "2023-06-26T20:50:01.943Z",
// //             "updated_at": "2023-06-26T20:50:01.943Z"
// //         },
// //         {
// //             "_id": "6499f976724c6d1d02be9576",
// //             "name": "EXFOLIATION TONERS",
// //             "category": "6499f2e3e915f50b66221ccf",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812490/cybersgenii%40gmail/image/pazze60anhwkzsmpirur.jpg",
// //             "created_at": "2023-06-26T20:47:50.898Z",
// //             "updated_at": "2023-06-26T20:47:50.898Z"
// //         },
// //         {
// //             "_id": "6499f957724c6d1d02be9573",
// //             "name": "HYDRATING TONERS",
// //             "category": "6499f2e3e915f50b66221ccf",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812458/cybersgenii%40gmail/image/ks9lcivoapfoekvucce6.jpg",
// //             "created_at": "2023-06-26T20:47:19.680Z",
// //             "updated_at": "2023-06-26T20:47:19.680Z"
// //         },
// //         {
// //             "_id": "6499f8df724c6d1d02be9570",
// //             "name": "MICELLAR WATER",
// //             "category": "6499f2d1e915f50b66221ccc",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812338/cybersgenii%40gmail/image/uzybhd5f625sjd2ec0fp.jpg",
// //             "created_at": "2023-06-26T20:45:19.099Z",
// //             "updated_at": "2023-06-26T20:45:19.099Z"
// //         },
// //         {
// //             "_id": "6499f8bc724c6d1d02be956d",
// //             "name": "CLEANSING BALMS",
// //             "category": "6499f2d1e915f50b66221ccc",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812303/cybersgenii%40gmail/image/oonux5pzps0ecwabv9gh.jpg",
// //             "created_at": "2023-06-26T20:44:44.163Z",
// //             "updated_at": "2023-06-26T20:44:44.163Z"
// //         },
// //         {
// //             "_id": "6499f888724c6d1d02be956a",
// //             "name": "FACE WASH",
// //             "category": "6499f2d1e915f50b66221ccc",
// //             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812250/cybersgenii%40gmail/image/qy02efshzwcxkchvb2es.jpg",
// //             "created_at": "2023-06-26T20:43:52.304Z",
// //             "updated_at": "2023-06-26T20:43:52.304Z"
// //         }
// //     ],
// //     "success": true,
// //     "doc_length": 8
// // }

// // GET get one sub category
// // localhost:5000/admin/sub-category/6499fa23724c6d1d02be957f
// // {
// //     "message": "gotten one data successfully",
// //     "data": {
// //         "_id": "6499fa23724c6d1d02be957f",
// //         "name": "LIP MASK",
// //         "category": "6499f325e915f50b66221cd8",
// //         "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812662/cybersgenii%40gmail/image/yxiiqy26lu1rbvr514wu.jpg",
// //         "created_at": "2023-06-26T20:50:43.152Z",
// //         "updated_at": "2023-06-26T20:50:43.152Z",
// //         "__v": 0
// //     },
// //     "success": true
// // }

// // product; GET get products
// https://jenny-pnw8.onrender.com/product/649af83cfc24d21997d7cd88

// // Query Params
// // category 6499f325e915f50b66221cd8
// // sub_category 6499f976724c6d1d02be9576
// // sort -name
// // fields -name,-price
// // page 2
// // limit 1
// // {
// //     "message": "data fetched successfully",
// //     "data": [],
// //     "success": true,
// //     "doc_length": 0
// // }

// GET
// get products
// localhost:5000/product
// ﻿

// Query Params
// category
// 6499f325e915f50b66221cd8
// sub_category
// 6499f976724c6d1d02be9576
// sort
// -name
// fields
// -name,-price
// page
// 2
// limit
// 1
// Example
// get products
// Request
// View More
// Dart - dio
// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/product',
//   options: Options(
//     method: 'GET',
//   ),
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 200 OK
// Response
// Body
// Headers (7)
// View More
// json
// {
//     "message": "data fetched successfully",
//     "data": [
//         {
//             "_id": "649af83cfc24d21997d7cd88",
//             "name": "LIGHT CREAM",
//             "description": "a very good product",
//             "price": 26,
//             "number_in_stock": 299,
//             "category": {
//                 "_id": "6499f2e3e915f50b66221ccf",
//                 "name": "TONERS",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810807/cybersgenii%40gmail/image/yr9iicy6gpzbpvfmqh36.jpg",
//                 "created_at": "2023-06-26T20:19:47.836Z",
//                 "updated_at": "2023-06-26T20:19:47.836Z",
//                 "__v": 0
//             },
//             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687877710/cybersgenii/image/yf6adwlnflvhbt1kn2ku.jpg",
//             "search_tags": [
//                 "name",
//                 "game",
//                 "clean"
//             ],
//             "sub_category": {
//                 "_id": "6499f976724c6d1d02be9576",
//                 "name": "EXFOLIATION TONERS",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812490/cybersgenii%40gmail/image/pazze60anhwkzsmpirur.jpg"
//             },
//             "other_image": [
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687877712/cybersgenii/other_image/slmorjbjk4i8bfbjgd8s.jpg",
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687877714/cybersgenii/other_image/zffsioqxs5pctrrawstb.jpg"
//             ],
//             "weight": 78,
//             "discount_percentage": 10,
//             "featured": true,
//             "available": true,
//             "reviews": []
//         },
//         {
//             "_id": "649ad914bc4f0536f601bc78",
//             "name": "cream lotion",
//             "description": "a very good product",
//             "price": 26,
//             "number_in_stock": 299,
//             "category": {
//                 "_id": "6499f325e915f50b66221cd8",
//                 "name": "LIPCARE",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810871/cybersgenii%40gmail/image/kuwqq7rdpyg6pp8vmxyu.jpg",
//                 "created_at": "2023-06-26T20:20:53.806Z",
//                 "updated_at": "2023-06-26T20:20:53.806Z",
//                 "__v": 0
//             },
//             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687869732/cybersgenii/image/ckxbkcvpkmi2u4tgigie.jpg",
//             "search_tags": [
//                 "name",
//                 "game",
//                 "clean"
//             ],
//             "sub_category": {
//                 "_id": "6499fa23724c6d1d02be957f",
//                 "name": "LIP MASK",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812662/cybersgenii%40gmail/image/yxiiqy26lu1rbvr514wu.jpg"
//             },
//             "other_image": [
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687869734/cybersgenii/other_image/kvtqq384bi3lhhanbfmv.jpg",
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687869736/cybersgenii/other_image/nerdehwiupkg9p5nhjbw.jpg"
//             ],
//             "weight": 78,
//             "discount_percentage": 10,
//             "featured": true,
//             "available": true,
//             "reviews": []
//         },
//         {
//             "_id": "649ad741cdcaba8b65a6aed8",
//             "name": "pink boost",
//             "description": "a very good product",
//             "price": 26,
//             "number_in_stock": 299,
//             "category": {
//                 "_id": "6499f325e915f50b66221cd8",
//                 "name": "LIPCARE",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810871/cybersgenii%40gmail/image/kuwqq7rdpyg6pp8vmxyu.jpg",
//                 "created_at": "2023-06-26T20:20:53.806Z",
//                 "updated_at": "2023-06-26T20:20:53.806Z",
//                 "__v": 0
//             },
//             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687869266/cybersgenii/image/ym3fmkeelqr7rrj0hjjg.jpg",
//             "search_tags": [
//                 "name game clean"
//             ],
//             "sub_category": {
//                 "_id": "6499fa23724c6d1d02be957f",
//                 "name": "LIP MASK",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812662/cybersgenii%40gmail/image/yxiiqy26lu1rbvr514wu.jpg"
//             },
//             "other_image": [
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687869268/cybersgenii/other_image/xi4lxxuzbvbyiackfd4g.jpg",
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687869270/cybersgenii/other_image/f0arzn8yljelkjw7xh6y.jpg"
//             ],
//             "weight": 78,
//             "discount_percentage": 10,
//             "featured": true,
//             "available": true,
//             "reviews": []
//         },
//         {
//             "_id": "649ad6ae07199255d63f157a",
//             "name": "pink balm",
//             "description": "a very good product",
//             "price": 26,
//             "number_in_stock": 299,
//             "category": {
//                 "_id": "6499f325e915f50b66221cd8",
//                 "name": "LIPCARE",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810871/cybersgenii%40gmail/image/kuwqq7rdpyg6pp8vmxyu.jpg",
//                 "created_at": "2023-06-26T20:20:53.806Z",
//                 "updated_at": "2023-06-26T20:20:53.806Z",
//                 "__v": 0
//             },
//             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687869120/cybersgenii/image/q3l9xboqrxsjenpjs7dq.jpg",
//             "search_tags": [
//                 "n",
//                 "a",
//                 "m",
//                 "e",
//                 " ",
//                 "g",
//                 "a",
//                 "m",
//                 "e",
//                 " ",
//                 "c",
//                 "l",
//                 "e",
//                 "a",
//                 "n"
//             ],
//             "sub_category": {
//                 "_id": "6499fa23724c6d1d02be957f",
//                 "name": "LIP MASK",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812662/cybersgenii%40gmail/image/yxiiqy26lu1rbvr514wu.jpg"
//             },
//             "other_image": [
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687869121/cybersgenii/other_image/xjmkqbqtj4eot1hulyoy.jpg",
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687869123/cybersgenii/other_image/c4qz6shrd0dd6ykk7dlj.jpg"
//             ],
//             "weight": 78,
//             "discount_percentage": 10,
//             "featured": true,
//             "available": true,
//             "reviews": []
//         },
//         {
//             "_id": "649ad66c07199255d63f1576",
//             "name": "pink lip",
//             "description": "a very good product",
//             "price": 26,
//             "number_in_stock": 299,
//             "category": {
//                 "_id": "6499f325e915f50b66221cd8",
//                 "name": "LIPCARE",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810871/cybersgenii%40gmail/image/kuwqq7rdpyg6pp8vmxyu.jpg",
//                 "created_at": "2023-06-26T20:20:53.806Z",
//                 "updated_at": "2023-06-26T20:20:53.806Z",
//                 "__v": 0
//             },
//             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687869053/cybersgenii/image/gw7bpyt0mvrkknurjpkj.jpg",
//             "search_tags": [
//                 "[",
//                 "\"",
//                 "c",
//                 "l",
//                 "e",
//                 "a",
//                 "n",
//                 "\"",
//                 ",",
//                 " ",
//                 "\"",
//                 "g",
//                 "o",
//                 "a",
//                 "l",
//                 "\"",
//                 "]"
//             ],
//             "sub_category": {
//                 "_id": "6499fa23724c6d1d02be957f",
//                 "name": "LIP MASK",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812662/cybersgenii%40gmail/image/yxiiqy26lu1rbvr514wu.jpg"
//             },
//             "other_image": [
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687869055/cybersgenii/other_image/lconpfemae0m5fx7yu0w.jpg",
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687869057/cybersgenii/other_image/ig2hhvyiz2envpzsekgc.jpg"
//             ],
//             "weight": 78,
//             "discount_percentage": 10,
//             "featured": true,
//             "available": true,
//             "reviews": []
//         },
//         {
//             "_id": "649ad4a3069cdac15791a85d",
//             "name": "lip balm",
//             "description": "a very good product",
//             "price": 26,
//             "number_in_stock": 299,
//             "category": {
//                 "_id": "6499f325e915f50b66221cd8",
//                 "name": "LIPCARE",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687810871/cybersgenii%40gmail/image/kuwqq7rdpyg6pp8vmxyu.jpg",
//                 "created_at": "2023-06-26T20:20:53.806Z",
//                 "updated_at": "2023-06-26T20:20:53.806Z",
//                 "__v": 0
//             },
//             "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687868596/cybersgenii/image/iukdfw3lcwkaggc9w3fd.jpg",
//             "search_tags": [
//                 "[\"hello\"]"
//             ],
//             "sub_category": {
//                 "_id": "6499fa23724c6d1d02be957f",
//                 "name": "LIP MASK",
//                 "image": "https://res.cloudinary.com/cybergenii/image/upload/v1687812662/cybersgenii%40gmail/image/yxiiqy26lu1rbvr514wu.jpg"
//             },
//             "other_image": [
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687868598/cybersgenii/other_image/seh9jvrlgcduqszgrwdn.jpg",
//                 "https://res.cloudinary.com/cybergenii/image/upload/v1687868600/cybersgenii/other_image/zji0bzygzz0hzyz5shq2.jpg"
//             ],
//             "weight": 78,
//             "discount_percentage": 10,
//             "featured": true,
//             "available": true,
//             "reviews": []
//         }
//     ],
//     "success": true,
//     "doc_length": 6
// }
// general route
// ﻿

// GET
// get countries
// localhost:5000/gen/location/country-state?state=new york
// ﻿

// Query Params
// country
// japan
// state
// new york
// Example
// New Request
// Request
// View More
// Dart - dio
// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/gen/location/country-state?state=new york',
//   options: Options(
//     method: 'GET',
//   ),
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 200 OK
// Response
// Body
// Headers (7)
// View More
// json
// {
//     "message": "fetched address successfully",
//     "data": [
//         {
//             "name": "United States",
//             "states": [
//                 {
//                     "name": "Alabama"
//                 },
//                 {
//                     "name": "Alaska"
//                 },
//                 {
//                     "name": "American Samoa"
//                 },
//                 {
//                     "name": "Arizona"
//                 },
//                 {
//                     "name": "Arkansas"
//                 },
//                 {
//                     "name": "Baker Island"
//                 },
//                 {
//                     "name": "California"
//                 },
//                 {
//                     "name": "Colorado"
//                 },
//                 {
//                     "name": "Connecticut"
//                 },
//                 {
//                     "name": "Delaware"
//                 },
//                 {
//                     "name": "District of Columbia"
//                 },
//                 {
//                     "name": "Florida"
//                 },
//                 {
//                     "name": "Georgia"
//                 },
//                 {
//                     "name": "Guam"
//                 },
//                 {
//                     "name": "Hawaii"
//                 },
//                 {
//                     "name": "Howland Island"
//                 },
//                 {
//                     "name": "Idaho"
//                 },
//                 {
//                     "name": "Illinois"
//                 },
//                 {
//                     "name": "Indiana"
//                 },
//                 {
//                     "name": "Iowa"
//                 },
//                 {
//                     "name": "Jarvis Island"
//                 },
//                 {
//                     "name": "Johnston Atoll"
//                 },
//                 {
//                     "name": "Kansas"
//                 },
//                 {
//                     "name": "Kentucky"
//                 },
//                 {
//                     "name": "Kingman Reef"
//                 },
//                 {
//                     "name": "Louisiana"
//                 },
//                 {
//                     "name": "Maine"
//                 },
//                 {
//                     "name": "Maryland"
//                 },
//                 {
//                     "name": "Massachusetts"
//                 },
//                 {
//                     "name": "Michigan"
//                 },
//                 {
//                     "name": "Midway Atoll"
//                 },
//                 {
//                     "name": "Minnesota"
//                 },
//                 {
//                     "name": "Mississippi"
//                 },
//                 {
//                     "name": "Missouri"
//                 },
//                 {
//                     "name": "Montana"
//                 },
//                 {
//                     "name": "Navassa Island"
//                 },
//                 {
//                     "name": "Nebraska"
//                 },
//                 {
//                     "name": "Nevada"
//                 },
//                 {
//                     "name": "New Hampshire"
//                 },
//                 {
//                     "name": "New Jersey"
//                 },
//                 {
//                     "name": "New Mexico"
//                 },
//                 {
//                     "name": "New York"
//                 },
//                 {
//                     "name": "North Carolina"
//                 },
//                 {
//                     "name": "North Dakota"
//                 },
//                 {
//                     "name": "Northern Mariana Islands"
//                 },
//                 {
//                     "name": "Ohio"
//                 },
//                 {
//                     "name": "Oklahoma"
//                 },
//                 {
//                     "name": "Oregon"
//                 },
//                 {
//                     "name": "Palmyra Atoll"
//                 },
//                 {
//                     "name": "Pennsylvania"
//                 },
//                 {
//                     "name": "Puerto Rico"
//                 },
//                 {
//                     "name": "Rhode Island"
//                 },
//                 {
//                     "name": "South Carolina"
//                 },
//                 {
//                     "name": "South Dakota"
//                 },
//                 {
//                     "name": "Tennessee"
//                 },
//                 {
//                     "name": "Texas"
//                 },
//                 {
//                     "name": "United States Minor Outlying Islands"
//                 },
//                 {
//                     "name": "United States Virgin Islands"
//                 },
//                 {
//                     "name": "Utah"
//                 },
//                 {
//                     "name": "Vermont"
//                 },
//                 {
//                     "name": "Virginia"
//                 },
//                 {
//                     "name": "Wake Island"
//                 },
//                 {
//                     "name": "Washington"
//                 },
//                 {
//                     "name": "West Virginia"
//                 },
//                 {
//                     "name": "Wisconsin"
//                 },
//                 {
//                     "name": "Wyoming"
//                 }
//             ]
//         }
//     ],
//     "success": true
// }
// GET
// get countires and states
// localhost:5000/gen/location/country-state?country=nigeria
// ﻿

// Query Params
// country
// nigeria
// state
// new york
// address
// ﻿

// GET
// get one address
// localhost:5000/user/address/649b32ef99924d907c8d6f11
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// Example
// New Request
// Request
// View More
// Dart - dio
// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/user/address/649b32ef99924d907c8d6f11',
//   options: Options(
//     method: 'GET',
//   ),
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 200 OK
// Response
// Body
// Headers (7)
// View More
// json
// {
//     "message": " fetched successfully",
//     "data": {
//         "_id": "649b32ef99924d907c8d6f11",
//         "address": "adolor",
//         "country": "NIGERIA",
//         "local_government": "LANGTAN",
//         "name": "derek og",
//         "phone": "+2348188266175",
//         "state": "PLATEAU",
//         "zip_code": "23406",
//         "is_default": false,
//         "created_at": "2023-06-27T19:05:19.864Z",
//         "updated_at": "2023-06-27T19:05:19.864Z"
//     },
//     "success": true
// }
// POST
// add address
// localhost:5000/user/address
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// Body
// raw (json)
// json
// {
//     "address":"adolor",
//     "country":"Nigeria",
//     "local_government":"langtan",
//     "name":"derek og",
//     "phone":"+2348188266175",
//     "state":"plateau",
//     "zip_code":"23406"}
  
// Example
// New Request
// Request
// View More
// Dart - dio
// var data = '''{\r\n    "address":"adolor",\r\n    "country":"Nigeria",\r\n    "local_government":"langtan",\r\n    "name":"derek og",\r\n    "phone":"+2348188266175",\r\n    "state":"plateau",\r\n    "zip_code":"23406"}\r\n  ''';
// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/user/address',
//   options: Options(
//     method: 'POST',
//   ),
//   data: data,
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 201 CREATED
// Response
// Body
// Headers (7)
// View More
// json
// {
//     "message": "successfully created",
//     "data": {
//         "user": "6499dfa094222d6731e1b51a",
//         "address": "adolor",
//         "country": "NIGERIA",
//         "local_government": "LANGTAN",
//         "name": "derek og",
//         "phone": "+2348188266175",
//         "state": "PLATEAU",
//         "zip_code": "23406",
//         "is_default": false,
//         "_id": "649b32ef99924d907c8d6f11",
//         "created_at": "2023-06-27T19:05:19.864Z",
//         "updated_at": "2023-06-27T19:05:19.864Z",
//         "__v": 0
//     },
//     "success": true
// }
// GET
// get many address
// localhost:5000/user/address
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// Example
// New Request
// Request
// View More
// Dart - dio
// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/user/address',
//   options: Options(
//     method: 'GET',
//   ),
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 200 OK
// Response
// Body
// Headers (7)
// View More
// json
// {
//     "message": "data fetched successfully",
//     "data": [
//         {
//             "_id": "649b32ef99924d907c8d6f11",
//             "address": "adolor",
//             "country": "NIGERIA",
//             "local_government": "LANGTAN",
//             "name": "derek og",
//             "phone": "+2348188266175",
//             "state": "PLATEAU",
//             "zip_code": "23406",
//             "is_default": false,
//             "created_at": "2023-06-27T19:05:19.864Z",
//             "updated_at": "2023-06-27T19:05:19.864Z"
//         },
//         {
//             "_id": "649b308954a9997d1e470ee3",
//             "address": "adolor",
//             "country": "NIGERIA",
//             "local_government": "EGOR",
//             "name": "derek og",
//             "phone": "+2348188266175",
//             "state": "LAGOS",
//             "zip_code": "23406",
//             "is_default": true,
//             "created_at": "2023-06-27T18:55:05.554Z",
//             "updated_at": "2023-06-27T18:55:05.554Z"
//         }
//     ],
//     "success": true,
//     "doc_length": 2
// }
// GET
// get all addresses
// localhost:5000/user/address
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// wishlist
// ﻿

// GET
// get wish list
// localhost:5000/user/wishlist/
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// POST
// add and remove from wishlist
// localhost:5000/user/wishlist/add/649ad914bc4f0536f601bc78
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// profile
// ﻿

// PATCH
// update profile
// localhost:5000/user/profile/user
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// Body
// form-data
// first_name
// derek
// last_name
// og
// profile_image
// realmiamor.jpg
// gender
// male
// Example
// update profile
// Request
// View More
// Dart - dio
// var data = FormData.fromMap({
//   'files': [
//     await MultipartFile.fromFile('realmiamor.jpg', filename: '')
//   ],
//   'first_name': 'derek',
//   'last_name': 'og',
//   'gender': 'male'
// });

// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/user/profile/user',
//   options: Options(
//     method: 'PATCH',
//   ),
//   data: data,
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 200 OK
// Response
// Body
// Headers (7)
// View More
// json
// {
//     "message": "successfully updated ",
//     "data": [
//         {
//             "_id": "6499dfa294222d6731e1b51c",
//             "profile_image": "https://res.cloudinary.com/cybergenii/image/upload/v1688022516/cybersgenii/profile_image/npghxomzvfgolfm1ughe.jpg",
//             "created_at": "2023-06-26T18:57:38.874Z",
//             "updated_at": "2023-06-29T07:08:12.938Z",
//             "first_name": "derek",
//             "gender": "male",
//             "last_name": "og"
//         }
//     ],
//     "success": true
// }
// cart
// ﻿

// PATCH
// add to cart
// localhost:5000/user/cart/add/649af83cfc24d21997d7cd88
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// Example
// add to cart
// Request
// View More
// Dart - dio
// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/user/cart/add/649af83cfc24d21997d7cd88',
//   options: Options(
//     method: 'PATCH',
//   ),
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 200 OK
// Response
// Body
// Headers (7)
// View More
// json
// {
//     "message": "added successfully",
//     "data": "LIGHT CREAM added successfully to cart ",
//     "success": true
// }
// GET
// get cart
// localhost:5000/user/cart/
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// Example
// get cart
// Request
// View More
// Dart - dio
// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/user/cart/',
//   options: Options(
//     method: 'GET',
//   ),
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 200 OK
// Response
// Body
// Headers (7)
// View More
// json
// {
//     "message": " fetched successfully",
//     "data": [
//         {
//             "_id": "649d6095176e6bd8180e3cb1",
//             "products": [
//                 {
//                     "_id": "649dbdb9ec973c364917b8ce",
//                     "product": "649af83cfc24d21997d7cd88",
//                     "cart_id": "649d6095176e6bd8180e3cb1",
//                     "product_total_count": 1,
//                     "product_total_price": 23.4,
//                     "shipping_fee": 5000,
//                     "__v": 0
//                 }
//             ],
//             "created_at": "2023-06-29T10:44:37.476Z",
//             "updated_at": "2023-06-29T17:22:02.059Z",
//             "__v": 28,
//             "sub_total": 23.4,
//             "total_price": 5024.57,
//             "total_shipping_fee": 5000,
//             "vat": 1.17
//         }
//     ],
//     "success": true
// }
// DELETE
// removef rom cart
// localhost:5000/user/cart/remove/649af83cfc24d21997d7cd88
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// Example
// remove from cart
// Request
// View More
// Dart - dio
// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/user/cart/remove/649af83cfc24d21997d7cd88',
//   options: Options(
//     method: 'DELETE',
//   ),
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 200 OK
// Response
// Body
// Headers (7)
// View More
// json
// {
//     "message": "removed successfully",
//     "data": "LIGHT CREAM removed successfully from cart ",
//     "success": true
// }
// DELETE
// clear cart
// localhost:5000/user/cart/clear/cart
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// Example
// clear cart
// Request
// View More
// Dart - dio
// var dio = Dio();
// var response = await dio.request(
//   'localhost:5000/user/cart/clear/cart',
//   options: Options(
//     method: 'DELETE',
//   ),
// );

// if (response.statusCode == 200) {
//   print(json.encode(response.data));
// }
// else {
//   print(response.statusMessage);
// }
// 200 OK
// Response
// Body
// Headers (7)
// json
// {
//     "message": "cart cleared",
//     "data": "cart emptied successfully",
//     "success": true
// }
// PATCH
// update cart with address id
// localhost:5000/user/cart/update-cart-with-address/649b32ef99924d907c8d6f11
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// GET
// get cart example
// localhost:5000/user/cart/
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// DELETE
// localhost:5000/user/cart/clear/cart
// localhost:5000/user/cart/clear/cart
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// GET
// localhost:5000/user/cart/
// localhost:5000/user/cart/
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// PATCH
// localhost:5000/user/cart/add/649af83cfc24d21997d7cd88
// localhost:5000/user/cart/add/649af83cfc24d21997d7cd88
// ﻿

// Authorization
// Bearer Token
// Token
// <token>
// GET
// localhost:5000/user/cart/
// localhost:5000/user/cart/
// ﻿

// Authorization
// Bearer Token
// Token
// <token>