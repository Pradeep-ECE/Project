

require('./config');

CONSTANT = {};
/*Group based on modules*/
CONSTANT.SCHEMAS = [
  'employee',
  'settings'
  
];
// CONSTANT.DEFAULT_ROLES = [
//   'Customer',
//   'Guest'
// ];
// CONSTANT.CUSTOM_PLUGINS = {
//   emailMarketing: 'Email Marketing'
// }
// CONSTANT.ROLES = {
//   CUSTOMER: 'Customer'
// };
// CONSTANT.WHOLESALE_REQUEST = {
//   APPROVED: 'Approved',
//   DECLINED: 'Declined'
// };
// CONSTANT.ROLE_CODES = {
//   CUSTOMER: 'CUSTOMER'
// }
// // CATEGORY_ARRAY = [
// //   'Storefront Menus',
// //   'Signed in Customers',
// //   'Guest Customers',
// //   // 'Customer Profile'
// // ];
// CONSTANT.GUEST_CATEGORY_ARRAY = [
//   'Storefront Menus',
//   'Guest Customers',
// ];
// CONSTANT.CUSTOMER_CATEGORY_ARRAY = [
//   'Storefront Menus',
//   'Signed in Customers',
//   'Customer Profile'
// ];
// // orderStatusId = 2;

// // orderStatusPropertyId = 23;
// // SALES_CHANNEL_CATEGORY_ID = 1;
// // ROLE = {
// //   SUPERADMIN: 1,
// //   ADMIN: 2,
// //   STAFF: 3,
// //   VENDOR: 4,
// //   CUSTOMER: 5,
// //   WHOLESALE: 6,
// //   GUEST: 7
// // };

// CONSTANT.DISCOUNT_TYPE = {
//   PERCENTAGE: 1,
//   FIXED: 2,
//   FREE_SHIPPING: 3,
//   BUY_X_GET_Y: 4,
//   FREE_GIFT: 5,
// };
// CONSTANT.APPLIES_TO = {
//   NAME: 'APPLICABLE_TO',
//   ORDER: 'ORDER',
//   ITEMS_IN_ORDER: 'ITEMS_IN_ORDER',
//   SHIPPING_CHARGE: 'SHIPPING_CHARGE',
// };
// CONSTANT.APPLIED_ON = {
//   NAME: 'APPLIED_ON'
// };
// CONSTANT.CUSTOMER_ELIGIBILITY_TYPE = {
//   NAME: 'APPLICABLE_CUSTOMERS',
//   CUSTOMER_GROUP: 'CUSTOMER_GROUP',
//   COUNTRY: 'COUNTRY',
//   ROLE: 'ROLE_BASED',
//   CUSTOMER: 'CUSTOMERS',
//   FOR_ALL: 'FOR_ALL',
// };
// CONSTANT.APPLICABLE_ITEMS = {
//   NAME: 'Applicable Items',
//   CATEGORY: 'Category',
//   PRODUCT: 'Product',
//   BRAND: 'Brand',
//   SUBSCRIPTION_BOX: 'Subscription Box',
// };
// CONSTANT.RESTRICTION_BASED_ON = {
//   NAME: 'DISCOUNT_RESTRICTION_VALUES',
//   QUANTITY_OF_ITEM: 'MINIMUM_QUANTITY_OF_ITEMS',
//   PURCHASE_AMOUNT: 'MINIMUM_PURCHASE_AMOUNT',
//   NONE: 'NONE'
// };
// CONSTANT.PROPERTY_VALUES = ['DISCOUNT_RESTRICTION_VALUES', 'APPLICABLE_TO', 'APPLICABLE_CUSTOMERS'];
// // CART_STATUS = {
// //   ACTIVE: 7,
// //   ABANDONED: 8,
// //   CONVERTED_TO_ORDER: 9,
// // };
// CONSTANT.PROPERTIES = {
//   MENU_TYPES: 'MENU_TYPES',
//   NOTIFICATION_TYPES: 'NOTIFICATION_TYPES'
// };
// CONSTANT.DIRECTORY_NAME = {
//   GALLERY: 'gallery',
//   ATTACHMENTS: 'attachments',
//   TESTIMONIAL: 'testimonial',
//   PAGE_SETUP: 'pagesetup/',
//   REVIEW: 'reviews/',
//   BLOG: 'blog',
//   BLOG_CATEGORIES: 'blogCategories',
//   DISCOUNTS: 'discounts',
//   STORE_LOGO: 'storeLogo',
//   BRANDS: 'brands',
//   PRODUCT_SUBSCRIPTION: 'productSubscription',
//   CATEGORY: 'categories',
//   PRODUCTS: 'products/',
//   PLUGIN: 'plugin',
//   SETTINGS: 'settings/',
//   INVOICE: 'invoice/',
//   CART_PRODUCT_MODIFIER: 'cartproductmodifier/',
//   PRODUCT_CATALOGS: 'productCatalog/',
//   GIFTCARDS: 'giftCards/',
//   EMAILMARKETING: 'emailmarketing/template'
// };
// CONSTANT.FILE_TYPE = {
//   PNG: '.png',
//   MP4: '.mp4'
// };

// CONSTANT.IMAGE_NAME = {
//   CATEGORY: 'category',
//   PLUGIN: 'plugin',
//   TESTIMONIAL: 'testimonial'
// };
// // MENU_TYPES = {
// //   HEADER: 14,
// //   FOOTER: 15,
// //   BOTH: 16,
// // };
// CONSTANT.STORE_PAGE_CONTENT = {
//   PUBLISHED_PAGE_CONTENT: 'publishedPageContent',
//   SAVED_PAGE_CONTENT: 'savedPageContent',
//   SAVED: 'saved',
//   PUBLISHED: 'published',
//   BANNER_VIDEO: 'bannerVideo'
// };
// // COMMENTS_STATUS = {
// //   APPROVED: 91,
// //   PENDING: 90,
// //   REJECTED: 92,
// // };
// CONSTANT.Mail_SEND_MSG = {
//   SIGNATURE: `<br><br> <div>Regards,</div><div style="color:#696969">`,
//   MESSAGE:
//     `<div style="padding-top:1%;"><div">We hope you enjoy receiving news and special offer emails from Zenbasket.com. If you would prefer not receiving our emails, please <a style="text-decoration: none;" href="` +
//     CONFIG.ADMIN_APP_URL +
//     `/unsubscribecampaign/`,
//   MESSAGE_2:
//     `">click here</a> to unsubscribe.</div>
//   </div><img src="` +
//     CONFIG.HOST_URL +
//     `/v1/readreceipts/`,
// };
// CONSTANT.EMAIL_PROPERTY_VALUES = {
//   EMAIL_CAMPAIGN: 'Email Campaign',
// };
// // CATEGORY_PROPERTY_VALUE_ID = {
// //   CATEGORY_RULE: 8
// // };

// // PRODUCT_PROPERTY_VALUES_ID = {
// //   PO_SEND_VIA: 6,
// //   SHIP_VIA: 7
// // };
// CONSTANT.RESET_LINK_MAIL = {
//   invitation:
//     '<div><h1><b>Hello ${user.firstName} ${user.lastName}!</b></h1><body>You are recently requested to reset your password.Click the following button to reset your password.<br><br>\
//   <a style="padding-left:20%;" href="${CONFIG.ADMIN_APP_URL}/changepassword/${token}"><button style="background-color: #4CAF50; border-radius: 10px;color: white;text-align: center;display: inline-block;padding:13px;font-size:16px;margin: 4px 2px;cursor: pointer;">Reset Password</button></a>\
// <br><p><b>This link will expire in 24 hours,so be sure to use it right way.</b><br>If you are having trouble clicking this button,copy and paste the URL below into your browser.<br></p>\
// <a href="${CONFIG.ADMIN_APP_URL}/changepassword/${token}">${CONFIG.ADMIN_APP_URL}/changepassword/${token} </a></body>\
// </div>',
// };
// CONSTANT.USER_RESET_LINK_MAIL = {
//   invitation:
//     '<div><h1><b>Hello ${firstName} ${lastName}!</b></h1><body>A request has been received to change the password for your ${firstName} ${lastName} account.<br><br>Click the following button below to reset your password:<br><br>\
//     <a style="padding-left:20%;" href="${storefrontApiUrl}"><button style="background-color: #4CAF50; border-radius: 10px;color: white;text-align: center;display: inline-block;padding:13px;font-size:16px;margin: 4px 2px;cursor: pointer;">Reset Password</button></a>\
//   <br><br><p><b>This link will expire in 24 hours,so be sure to use it right way.</b><br><br>If you are having trouble clicking this button, copy and paste the URL below into your browser.<br><br></p>\
//   <a href="${storefrontApiUrl}">${storefrontApiUrl}</a><br><br>If you did not initiate this request, please do not hesitate to contact us if you have any questions at all.<br><br> ${storeEmail}</body>\
//   </div>',
// };
// CONSTANT.NEW_USER_LOGIN = {
//   invitation:
//     '<h2>Hi ${data.firstName} ${data.lastName} !,</h2>&#10;<p><b>Welcome to Zenbasket client company</b><br><br>You have been registered as a user in hj.</p><p class="MsoNormal"><p>To complete your registration process, please confirm your email address before you can proceed.</p>&#10;<a href="${CONFIG.ADMIN_APP_URL}${link}"><b>please click here to confirm your email.</b></a><p>Contact Centizen for further queries..!</b><br></p></h4><p><b>Thank you!</b></p>',
// };
// CONSTANT.NEW_CUSTOMER_LOGIN = {
//   invitation:
//     '<span>{{logo}}</span><div style="text-align: center;"><h1> Account Confirmation </h1></div><h2>Hi ${firstName} ${lastName} !,</h2>&#10;<p><b>Welcome to ${companyName}</b><br><br>You have been registered as a  ${userType}.</p><p class="MsoNormal"><p>To complete your registration process, please confirm your email address before you can proceed.</p>&#10;<a href="${STOREFRONT_APP_URL}"><b>please click here to confirm your email.</b></a><p>Please do not hesitate to contact us if you have any questions at all</p><p>${companyEmail} </p><br></p></h4><p><b>Thank you!</b></p>',
// }
// CONSTANT.USER_CONTACTUS_QUERY = {
//   invitation:
//     "<h2>Hi ${storeName} ,</h2>&#10;<p>You received a new query from your store's contact form!<br>\
// <p>Name: ${userName}</p><p>Email: ${email}</p><p>Contact Number: ${contactNumber}</p><p>Message:</p><q>${message}</q>\
// <br><br>Thanks & Regards,<br><b>ZenBasket Admin Team.</b></p>"
//   // '<h2>Hi ${storeName} ,</h2>&#10;<p>Glad to know that your store has found a new customer. Here is a query from a user. <br><br><q>${message}</q><br><br>Thanks & Regards,<br><b>ZenBasket Admin Team.</b></p>',
// };
// CONSTANT.GIFTCARD_MAIL_FOR_RECIPIENTS = {
//   invitation:
//     '<div style="width:85%; padding-left:10%; padding-right:10%">\
// <div style="background-color: white;">\
//     <div style="text-align: center;">\
//         <h2>Hi ${recipientName}!</h2>\
//         <h3>Thank you for purchasing gift card!</h3>\
//         <span>${purchasedDate}</span><br>\
//     </div><br>\
//     <br>\
//     <h2 style="text-align: center;color: #005374; border-bottom: 2px solid #000;line-height: 0.1em; "><span\
//             style="background:#fff; padding:0 10px; ">Here is your gift card!</span></h2><br>\
//     <div style="text-align: center;display: flex;\
//     /* background: silver; */width: 100%;height: 277px;">\
//         <div\
//             style="text-align: center;\
//             margin-left: auto;\
//             margin-right: auto;width:544px;height:277px; background: url(${giftCardImage});background-repeat: no-repeat; ">\
//             <!-- <img style="height: 40%;\
//         width: 54%;" src="../../assets/gift-card.png"> -->\
//             <div style="max-height: 100%;\
//             width: 43%;\
//             top: 10%;\
//             padding-top: 8%;">\
//                 <div style="text-align: center;"> <span style=" color: white;\
//             font-weight: bold;\
//             left: 30px;\
//             font-size: 33px;">${currency}${price}</span></div>\
//                 <div style="padding: 12px 0px 0px 17px;text-align: start;"><span style="color: whitesmoke;font-style: oblique;font-size: 18px;">Use this card as payment\
//                         for\
//                         anything you like to\
//                         purchase.</span></div>\
//                 <div style="margin-top: 4%;\
//                 text-align: center;\
//                 color: black;\
//                 background-image: linear-gradient(#fffcfc , #dbc8aa);\
//                 padding: 11px 20px 11px 11px;\
//                 font-size: 17px;\
//                 border-radius: 5px;\
//                 width: 66%;\
//                 margin-left: 13%;"><span>CouponCode:<b> ${coupenCode}</b></span></div>\
//             </div>\
//         </div>\
//     </div>\
//     <div style="text-align: center;\
//     padding: 20px;"><button style="padding: 13px;\
//     border-radius: 5px;\
//     background-color: #005374;\
//     color: white;\
//     font-weight: bold;\
//     font-size: 14px;"><a style="color: white;text-decoration: none;" href="${storefrontAppUrl}">Visit Our Site</a></button></div>\
//     <div>\
//         <span style="color: gray;font-size: 18px;">Enter the redeem option code at checkout to redeem your gift\
//             card.</span>\
//     </div><br>\
//     <div style="font-size: 17px;color:black;">\
//         <span><b>Terms And Conditions / Here’s what you need to know:</b></span>\
//         <ul>\
//             <li>For online Use only.\
//             </li>\
//             <li>Use Multiple times - Valid until the full value is redeemed.</li>\
//             ${expiration}\
//         </ul>\
//     </div>\
//     <p style="color:black;">If you have any questions,please feel free to contact us here..!</b><br>\
//     <p style="color:black;">${contactNo}</p>\
//     <p style="color:black;"><b>Thanks for shopping with us!</b><br><b>${storeName}</b></p>\
// </div>\
// </div>'
// };
// CONSTANT.GIFTCARD_MAIL_FOR_CUSTOMER_FROM_ADMIN = {
//   invitation:
//     '<div style="width:85%; padding-left:10%; padding-right:10%">\
// <div style="background-color: white;">\
//     <div style="text-align: center;">\
//         <h2>Hi ${recipientName}!</h2>\
//         <h3>Congratulations,<br></h3>\<span style="font-size: 15px;">We are pleased to inform you that a gift card worth ${currency}${price} has been provided to you by our ${storeName}.You can redeem this gift card for your next purchase.</span><br><br>\
//         <span><b>${purchasedDate}</b></span><br>\
//     </div><br>\
//     <br>\
//     <h2 style="text-align: center;color: #005374; border-bottom: 2px solid #000;line-height: 0.1em; "><span\
//             style="background:#fff; padding:0 10px; ">Here is your gift card!</span></h2><br>\
//     <div style="text-align: center;display: flex;\
//     /* background: silver; */width: 100%;height: 277px;">\
//         <div\
//             style="text-align: center;\
//             margin-left: auto;\
//             margin-right: auto;width:544px;height:277px; background: url(${giftCardImage});background-repeat: no-repeat; ">\
//             <!-- <img style="height: 40%;\
//         width: 54%;" src="../../assets/gift-card.png"> -->\
//             <div style="max-height: 100%;\
//             width: 43%;\
//             top: 10%;\
//             padding-top: 8%;">\
//                 <div style="text-align: center;"> <span style=" color: white;\
//             font-weight: bold;\
//             left: 30px;\
//             font-size: 33px;">${currency}${price}</span></div>\
//                 <div style="padding: 12px 0px 0px 17px;text-align: start;"><span style="color: whitesmoke;font-style: oblique;font-size: 18px;">Use this card as payment\
//                         for\
//                         anything you like to\
//                         purchase.</span></div>\
//                 <div style="margin-top: 4%;\
//                 text-align: center;\
//                 color: black;\
//                 background-image: linear-gradient(#fffcfc , #dbc8aa);\
//                 padding: 11px 20px 11px 11px;\
//                 font-size: 17px;\
//                 border-radius: 5px;\
//                 width: 66%;\
//                 margin-left: 13%;"><span>CouponCode:<b> ${coupenCode}</b></span></div>\
//             </div>\
//         </div>\
//     </div>\
//     <div style="text-align: center;\
//     padding: 20px;"><button style="padding: 13px;\
//     border-radius: 5px;\
//     background-color: #005374;\
//     color: white;\
//     font-weight: bold;\
//     font-size: 14px;"><a style="color: white;text-decoration: none;" href="${storefrontAppUrl}">Visit Our Site</a></button></div>\
//     <div>\
//         <span style="color: gray;font-size: 18px;">Enter the redeem option code at checkout to redeem your gift\
//             card.</span>\
//     </div><br>\
//     <div style="font-size: 17px;color:black;">\
//         <span><b>Terms And Conditions / Here’s what you need to know:</b></span>\
//         <ul>\
//             <li>For online Use only.\
//             </li>\
//             <li>Use Multiple times - Valid until the full value is redeemed.</li>\
//             ${expiration}\
//         </ul>\
//     </div>\
//     <p style="color:black;">If you have any questions,please feel free to contact us here..!</b><br>\
//     <p style="color:black;">${contactNo}</p>\
//     <p style="color:black;"><b>Thanks for shopping with us!</b><br><b>${storeName}</b></p>\
// </div>\
// </div>'
// };
// CONSTANT.TEST_MAIL_TO_VERIFY_CONFIGURATIONS = {
//   subject: 'Mail Configuration Data Verified!',
//   message: '<div><h3>Hi....!</h3><p>Your configuration details verified successfully!</p></div>'
// }
// CONSTANT.NEW_SOCIAL_USER_LOGIN = {
//   invitation:
//     '<h2>Hi ${userData.firstName} ${userData.lastName} !,</h2>&#10;<p><b>Welcome to Zenbasket client company</b><br><br>You have been registered as a user</p><p class="MsoNormal"><p>Contact Centizen for further queries..!</b><br></p></h4><p><b>Thank you!</b></p>',
// };
// CONSTANT.ENQUIRY_MESSAGE = {
//   message: '<div>\
//   <h2 style="text-align: center;">New Enquiry on ${date}</h2>\
//   <h3>Hi ZenBasket ,</h3>&#10;<p>\
//       You have received a new message from your site"s contact form.\
//       <br><br>\
//   <div style="display: flex;">\
//       <p style="width: 13%;">Name:</p>\
//       <p>${userName}</p>\
//   </div>\
//   <div style="display: flex;\
//   ">\
//       <p style="width: 13%;">Phone number : </p>\
//       <p>+${countryCode} ${contactNumber}</p>\
//   </div>\
//   <div style="display: flex;\
//  ">\
//       <p style="width: 13%;">Email :</p>\
//       <p> ${email}</p>\
//   </div>\
//  ${company}\
//   <div style="display: flex;">\
//       <p style="width: 13%;">Message :</p>\
//       <p>${message}</p>\
//   </div>\
// </div>'
// }
// // CONSTANT.TWO_STEP_VERIFICATION_LOGIN = {
// //   email:
// //     '<h2>Hi ${firstName} ${lastName} !,</h2>&#10;<p>Your two step verification code is.</p><b> ${verificationCode} </b><br><p>Contact Centizen for further queries..!</b><br></p></h4><p><b>Thank you!</b></p>',
// //   sms: 'Hi,Your two step verification code is ${verificationCode}'

// // };

// CONSTANT.TWO_STEP_VERIFICATION_LOGIN = {
//   email:
//     '<head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fjalla One"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto"></head><div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); max-width: 75%; margin: auto; text-align: center;"><div><div style="text-align: left;margin: auto;"><img src="https://zenbasket-uat.s3.ap-south-1.amazonaws.com/settings/ZB_PNG_Logo.png" style="margin: 20px;"></div><hr style="width: 93%; border-top: 2px solid #ffbe84"></div><div><div style=" text-align: left; margin: auto; width:93%; text-align: justify; text-justify: inter-word; font-size: 12px; line-height: 1.5;"><p style=" font-size:17px;font-family: Arial, Helvetica, sans-serif; color: black; text-shadow: 1px 1px 1px #ababab;"> Hi ${firstName} ${lastName} !</p><p style="font-size:14px;font-family: Arial, Helvetica, sans-serif;color: black;">To ensure your account security, you must confirm your identity by entering the four-digit code below on the two step verification screen now.</p></div><div style="margin: auto; width:93%; text-align: justify; text-justify: inter-word; line-height: 1.5;"><p style="font-size:14px; margin: 0px; font-weight: bolder; font-family: Arial, Helvetica, sans-serif;color: black;"> Your verification code is</p><p style="font-weight: bolder; font-family: Roboto; margin: 0px;font-size: 52px; color: #005374; letter-spacing: 15px;">${verificationCode}</p><p style="font-family: Arial, Helvetica, sans-serif; font-size: 10px; margin: 0px;">Your code will be valid for 3 minutes.</p></div><div style="text-align: left; margin: auto; width:93%; text-align: justify; text-justify: inter-word; font-size: 14px; line-height: 1.5;"><p style="font-size:14px;font-family: Arial, Helvetica, sans-serif;color: black;">Thank you,<br><b style="font-weight:400;">ZenBasket Team</b></p></div></div><div style="text-align: center; line-height: 1.5;"><p style="font-size:10px;font-family: Arial, Helvetica, sans-serif;color: black"> Problems or Queries ? | <a style="text-decoration: none; color: #005374; font-weight: bold;" mailto:href="support@zenbasket.com">support</a></p><hr style="width: 93%; border-top-style: groove; border-top: 2px solid #ffbe84"><p style="text-align: center; font-size:14px;font-family: Arial, Helvetica, sans-serif;color: #005374; line-height: 1;">Follow us for more updates or visit us here at <a href="https://zenbasket.in/home" style="font-size:14px;font-family: Arial, Helvetica, sans-serif;color: #ee8a33; text-decoration: none;"> zenbasket.in</a></p><a style="text-align: center; padding: 5px; text-decoration: none; background: none; color: #005374;" href="https://www.facebook.com/ZenBasket/"><img src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/facebook.png" style="height: 16px;"></a><a style="text-align: center; padding: 5px; text-decoration: none; background: none; color: #005374;" href="https://www.instagram.com/zenbasket/?hl=en"><img src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/insta.png" style="height: 16px;"></a><a style="text-align: center; padding: 5px; text-decoration: none; background: none; color: #005374;" href="https://twitter.com/zenbasket?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/twitter.png" style="height: 16px;"></a><a style="text-align: center; padding: 5px; text-decoration: none; background: none; color: #005374;" href="https://www.youtube.com/channel/UCKxvVDVd8clV2oEHFJVY6AA"><img src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/youtube.png" style="height: 16px;"></a></div><br></div>',
//   sms: 'Hi,Your two step verification code is ${verificationCode}'
// };
// CONSTANT.PRODUCT_TYPE = {
//   GIFTCARD: 'Gift Card'
// };
// CONSTANT.INVITE_USER_TO_ROLE = {
//   invitationMessage: '<h2>Hi User!</h2>&#10;<p><b>${storeName} invites you for the role of ${role}</b><br><br>If you are interested to join with us, please click on the below link</p>&#10;<a href="${ADMIN_APP_URL}${link}"><b>Please click here to add your details</b></a><p>Contact ${storeName} for further queries..!</b><br></p></h4><p><b>Thank you!</b></p>',
// };

// CONSTANT.SEND_REMAINDER_MAIL = {
//   remaindCartProductsSubject: 'Abandoned cart notification',
//   // <div style="display: flex;justify-content: center;"><img src="${data.logoUrl}"alt="${data.companyName}"style="width:auto !important; height:100px; display: block;margin: auto;" /></div>
//   remaindCartProductsMessage: '<div style="width:85%; padding-left:10%; padding-right:10%">\
//   <div style="background-color: white;">\
//       <div style="text-align: center;">\
//           logoImage\
//           <h2>Your shopping bag has been abandoned!</h2>\
//           <span style="color: gray;font-size: 18px;">Save these items hours of therapy and give them a loving\
//               home</span>\
//       </div><br>\
//       <br>\
//       <h2 style="text-align: center;color: #61c4c3; border-bottom: 2px solid #000;line-height: 0.1em; "><span\
//               style="background:#fff; padding:0 10px; ">You added items to your bag</span></h2><br>\
//       <div style="display: flex; ">\
//           <div style="width: 70%;"></div>\
//           <h4 style="width: 20%;">Quantity</h4>\
//           <h4 style="width: 13%;">Price</h4>\
//       </div>${tableRow}\
//   </div>\
// </div>'
// };

// CONSTANT.SEND_REMAINDER_MAIL_FOR_WAITLIST = {
//   remaindWaitList: 'Stock up Notification',
//   remaindWaitListMessage: '<h2>Hi ${customerName}!</h2><p><b> The wait is over. ${productName} is stocked now in ${storeName}. You can order it now from the below link.</b><br><br></p><a href="${STOREFRONT_APP_URL}"><b>Please click here to visit our store to place order</b></a><p>Contact ${storeName} for further queries..!</b><br></p></h4><p><b>Thank you!</b></p>',
// };
// CONSTANT.SEND_REMAINDER_MAIL_FOR_ERROR = {
//   errorSubject: 'Error notification',
//   errorMessage: '<h4>Store Name:</h4> <p>${storeName}</p><h4>Component Name:</h4> <p>${componentName}</p><h4>Error Message:</h4> <p>${message}</p>',
// };
// CONSTANT.SEND_DEMO_MAIL_TO_USER = {
//   message: 'Test mail to ',
// };
// CONSTANT.ATTACHMENT_CATEGORIES = {
//   variantCombinationDetails: 'Variant Combination Details',
//   variants: 'Variants',
//   reviews: 'Reviews',
//   products: 'Products',
//   productCatalogs: 'Product Catalog',
// };

// CONSTANT.STORE_DETAILS_DAYS = [
//   { name: 'mon', day: 'Monday', value: 1 },
//   { name: 'tue', day: 'Tuesday', value: 2 },
//   { name: 'wed', day: 'Wednesday', value: 3 },
//   { name: 'thu', day: 'Thursday', value: 4 },
//   { name: 'fri', day: 'Friday', value: 5 },
//   { name: 'sat', day: 'Saturday', value: 6 },
//   { name: 'sun', day: 'Sunday', value: 0 }
// ];

// CONSTANT.PLUGINS = {
//   emailMarketing: 'Email Marketing',
//   twoStepVerification: 'Two Step Verification',
//   twilio: 'Twilio',
//   twoFactor: 'SMS Authentication',
//   squarePos: "Square POS",
//   googlePluginCode: 'SHIPPING_DISTANCE_CALCULATION',
//   WHOLESALE: 'WHOLESALE',
//   CATEGORY_CUSTOMIZATION: 'CATEGORY_CUSTOMIZATION',
//   SQUAREPOS: "SQUAREPOS",
//   OPTIONS_AND_VARIANTS: "OPTIONS&VARIANTS",
//   PRODUCT_SPECIFICATION: "PRODUCT_SPECIFICATION",
//   MODIFIERS: "MODIFIERS",
//   facebook: "FACEBOOK_ADS",
//   RETURN_REQUEST: "RETURN_REQUEST",
//   SHIPPO: "SHIPPO",
//   SHIPYAARI: "SHIPYAARI",
//   FEDEX: "FEDEX",
//   DELHIVERY: "DELHIVERY"
// };
// CONSTANT.CUSTOM_FIELDS = {
//   autoResendDays: 'Auto Resend Days'
// };

// CONSTANT.CUSTOM_FIELDS_CODE = {
//   stripeCode: 'STRIPE_ACCOUNT_ID',
//   stripeProduction: 'STRIPE_IS_PRODUCTION',
//   trackingIdCode: 'TRACKING_ID',
//   avnKey: 'AVN_KEY',
//   delhiveryToken: 'DELHIVERY_TOKEN',
//   delhiveryClient: 'DELHIVERY_CLIENT_NAME'
// }

// CONSTANT.STRIPE = {
//   authorizedPayment: 'Authorized',
//   capturedPayment: 'Paid',
//   refundedPayment: 'Refunded',
//   cancelledPayment: 'Cancelled',
//   partiallyRefunded: 'Partial Refund',
// };
// CONSTANT.jobCodes = {
//   emailMarketingSchedule: "EMAIL_MARKETING_SCHEDULE",
//   elasticSearchCreateIndex: "ELASTIC_SEARCH_CREATE_INDEX",
//   manageInventory: "MANAGE_INVENTORY",
//   facebookIntegration: "FACEBOOK_INTEGRATION",
//   errorLogSchedule: "ERROR_LOGS_SCHEDULE",
//   productsImport: "PRODUCTS_IMPORT",
//   shippoTrackingStatus: "SHIPPO_TRACKING_STATUS",
//   giftcardExpirationAlert: "GIFTCARD_EXPIRATION_NOTIFICATION",
//   emailMarketingBoosterMail: "EMAIL_MARKETING_BOOSTER_MAIL",
//   delhiveryTrackingStatus: 'DELHIVERY_TRACK_STATUS',
//   shipyaariTrackingStatus: "SHIPYAARI_TRACK_STATUS",
//   giftcardExpirationAlert: "GIFTCARD_EXPIRATION_NOTIFICATION"
// };
// CONSTANT.success = "Success";
// CONSTANT.failed = "Failed";
// CONSTANT.ELASTICSEARCH = {
//   mailContent: '<h2>Hello Zenbasket Team,</h2><p>${message} on ${issueDate}. The issue occured is ${issue}</p>',
//   indexExists: "We failed to find the index exist or not in elastic search",
//   createIndexFailed: "We Failed to create the index in elastic search",
//   createIndexCatchError: "We failed to create the index in elastic search through catch error"
// }
// CONSTANT.ORDER_STATUS_ID = {
//   new: 85,
//   cancelled: 147,
//   delivered: 89,
//   pickedUp: 148,
//   returned: 149
// }
// CONSTANT.ORDER_STATUS_NAME = {
//   cancelled: "Cancelled",
//   packed: "Packed",
//   processing: "Processing",
//   pending: "Pending",
//   delivered: "Delivered",
//   shipped: "Shipped",
//   pickedUp: "Picked up",
//   returned: "Returned",
//   new: "New",
//   hold: "Hold",
//   bill: "Order Bill",
//   ready: "Ready",
//   cancelByAdmin: "CancelledByAdmin"
// }
// CONSTANT.GIFTCARD = {
//   balanceUpdation: "Gift card balance updation"
// }
// CONSTANT.ORDER_STATUS_CODE = {
//   cancelled: "CANCELLED",
//   returned: "RETURNED",
//   new: "NEW",
//   processing: "PROCESSING",
//   packed: "PACKED",
//   delivered: "DELIVERED",
//   pickedUp: "PICKED_UP",
//   hold: "HOLD",
//   shipped: "SHIPPED"
// }
// CONSTANT.REFUND_STATUS = {
//   success: "Success"
// }
// CONSTANT.NOTIFICATION_NAME = {
//   twoStepVerification: 'Two Step Verification',
//   orderConfirmed: "Order Confirmed",
//   newOrder: "New Order",
//   orderCancelled: "Order Cancelled",
//   orderRefund: "Order Refund",
//   orderPacked: "Order Packed",
//   orderHold: "Order Hold",
//   orderProccessing: "Order Processing",
//   delivered: "Delivered",
//   shipped: "Shipping Confirmation",
//   pickup: "Picked Up",
//   orderReturned: "Order Returned",
//   orderBill: "Order Bill",
//   adminOrderConfirmation: 'Admin Order Confirmation',
//   readyForPickUp: 'Ready For Pick-Up'
// }
// CONSTANT.PAYMENT_TYPE = {
//   CashOnDelivery: 'cod',
//   OnlinePayment: 'cash',

// };
// CONSTANT.NEW_ADMIN_LOGIN = {
//   invitation:
//     '<h2>Hi ${data}!,</h2>&#10;<p><b>Welcome to Zenbasket client company</b><br><br>Your email has been registered successfully as an admin.</p><p class="MsoNormal"><p>To complete your registration process, please give your store details and your details.</p>&#10;<a href="${CONFIG.ADMIN_APP_URL}${link}"><b>Please click here to register with us!</b></a><p>Contact Centizen for further queries..!</b><br></p></h4><p><b>Thank you!</b></p>',
// };

// CONSTANT.ADMIN_RESET_LINK_MAIL = {
//   invitation:
//     '<div><h1><b>Hello ${data}!</b></h1><body>You are recently requested to reset your password.Click the following button to create your password.<br><br>\
//   <a style="padding-left:20%;" href="${CONFIG.ADMIN_APP_URL}/adminchangepassword/${token}"><button style="background-color: #4CAF50; border-radius: 10px;color: white;text-align: center;display: inline-block;padding:13px;font-size:16px;margin: 4px 2px;cursor: pointer;">Reset Password</button></a>\
// <br><p><b>This link will expire in 24 hours,so be sure to use it right way.</b><br>If you are having trouble clicking this button,copy and paste the URL below into your browser.<br></p>\
// <a href="${CONFIG.ADMIN_APP_URL}/adminchangepassword/${token}">${CONFIG.ADMIN_APP_URL}/adminchangepassword/${token} </a></body>\
// </div>',
// };
// CONSTANT.STRIPE_PLUGIN_ID = 11;
// CONSTANT.ROLECODE = {
//   ADMIN: 'STOREADMIN',
//   SUPERADMIN: 'SUPERADMIN',
//   GUEST: 'GUEST',
//   CUSTOMER: 'CUSTOMER',
//   admin: 'Admin',
//   STAFF: 'STAFF',
//   LOCATION: 'LOCATION',
//   ROLE: 'ROLE'

// }

// CONSTANT.SHIPPING_METHOD = {
//   FREE: 'FREE',
//   FLAT: 'FLAT',
//   CONDITIONAL: 'CONDITIONAL',
//   GOOGLE_DISTANCE: 'GOOGLE_DISTANCE'
// };
// CONSTANT.PAID = "Paid";
// CONSTANT.PLUGIN_CATEGORY = {
//   payment: "Payment"
// };
// CONSTANT.RETURN_REQUEST_STATUS = {
//   Pending: 'Pending',
//   Returned: 'Returned',
//   Declined: 'Declined',
//   Approved: 'Approved'

// };
// CONSTANT.TRABSACTION_TYPE = {
//   orders: 'ORDERS',
//   storeCredits: 'STORE CREDITS',
//   subscriptionPlan: 'SUBSCRIPTION PLAN'
// }
// CONSTANT.PAYMENT_PLUGIN_NAME = {
//   square: "Square",
//   stripe: "Stripe",
//   payByCash: "Pay by Cash",
//   checkoutDotCom: "Checkout.com"
// };
// CONSTANT.PAYMENT_PLUGIN_CODE = {
//   cash: "CASH",
//   stripe: "STRIPE",
//   square: "SQUARE",
//   razorpay: "RAZORPAY",
//   paypal: "PAYPAL",
//   authorizeDotNet: "AUTHORIZE.NET",
//   checkoutDotCom: "CHECKOUT.COM"
// };
// CONSTANT.DEFAULT = 'DEFAULT'
// CONSTANT.PAYMENT_STATUS = {
//   authorizedPayment: 'Authorized',
//   reAuthorizePayment: 'ReAuthorize',
//   capturedPayment: 'Paid',
//   refundedPayment: 'Refunded',
//   cancelledPayment: 'Cancelled',
//   partiallyRefunded: 'Partial Refund',
//   cashRefunded: 'Cash Refund',
//   paymentCreated: 'Created'
// };
// CONSTANT.REFUND_TYPE = {
//   full: 'Full Refund',
//   partial: 'Partial Refund',
//   automatic: 'Automatic Refund'
// };
// CONSTANT.ORDER_PLACING_TIME_INDUSTRY_NAMES = ['bakery', 'coffee', 'restaurants'];
// CONSTANT.PROPERTY_VALUES_CODE = {
//   INVITATION_STATUS_CODE: 'INVITATION_STATUS',
//   RETURN_REQUEST_ACTION: 'RETURN_REQUEST_ACTIONS',
//   RETURN_REASONS: 'RETURN_REASONS'
// }
// CONSTANT.ADMIN_SIGN_UP = 'CLIENT_REGISTRATION';
// CONSTANT.ADMIN_FORGOT_PASSWORD = 'CLIENT_FORGOT_PASSWORD';
// CONSTANT.EMAIL_VERIFICATION = 'PENDING_EMAIL_VERIFICATION';
// CONSTANT.PROPERTY_CODE = {
//   orderStatus: "ORDER_STATUS",
//   facebookStatus: "FACEBOOK_STATUS",
//   returnRequestStatus: "RETURN_REQUEST_STATUS",
//   subscriptionStatus: "SUBSCRIPTION_STATUS"
// }
// CONSTANT.invoice = {
//   Style: {
//     fillColor: "white",
//     layout: "lightHorizontalLines",
//     fontColor: "black",
//     fontSize: 10,
//     headerColor: "#005374",
//     tableHeaderPosition: "center",
//     tableHeaderSize: 12,
//     pageSize: "A4",
//     fontTheme: "Roboto"
//   },
//   templateId: 5,
//   copyrightText: "CopyRights - Zenbasket@2021",
//   companyName: "Zenbasket",
//   companyAddress: {
//     "address": "25, Vinayagar Nagar, Near Jeba Garden, NGO Colony",
//     "city": "Tirunelveli",
//     "state": "Tamil Nadu",
//     "zipcode": "627007",
//     "country": "IND",
//     "phone": "9842590499",
//     "email": "centizen@gmail.com"
//   },
//   image: 'data:image/png;base64,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'
// };
// CONSTANT.ERROR_LOG_CATEGORY = {
//   cronJob: "Cron Job",
//   thirdParty: "Third Party"
// };
// //Do not change this array. It only for storefront's get website settings
// CONSTANT.WEBSITE_SETTINGS_PLUGIN_CODE = [{ fieldName: 'isWishListEnabled', code: 'WISHLIST' }, { fieldName: 'isWaitListEnabled', code: 'WAITLIST' }, { fieldName: 'isOptionsVariantsEnabled', code: 'OPTIONS&VARIANTS' }, { fieldName: 'isSpecificationEnabled', code: 'PRODUCTS_SPECIFICATION' }, { fieldName: 'isQuickOrderPagePluginEnabled', code: 'QUICK ORDER PRODUCTS' }, { fieldName: 'isCartQuickViewEnabled', code: 'CART QUICK VIEW' }, { fieldName: 'isSubscription', code: 'SUBSCRIPTION' }];
// CONSTANT.CUSTOM_FIELD_CODE = {
//   autoAprroved: 'AUTO_APPROVE_WHOLESALE',
//   blockWholesaleUser: 'BLOCK_WHOLESALE_AS_CUSTOMER'
// };
// CONSTANT.PLUGIN_CODE = {
//   wholeSale: 'WHOLESALE'
// };
// CONSTANT.ROLLBAR = 'https://api.rollbar.com/api/1/'


// CONSTANT.SEND_ORDER_FAILED_MAIL = {
//   errorSubject: "Order Failed Notification",
//   errorMessage: `<html>
//   <body style="background-color:rgb(249, 239, 239)">
//     <head>
//       <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
//       <style>
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
//       </style>
//     </head>
//     <div style=" max-width: 30%; margin: auto; text-align: center;">
//       <div style="background-color:rgba(138, 147, 155, 0.996);">
//         <div style="margin-top: 20px;padding-top: 20px;padding-bottom:10px;"><img
//             src="https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/danger_hanger_triangle_traffic_cone-1024.png"
//             alt="Zenbasket icon" style="width: 100px;"></div>
//         <p
//           style="text-align: center; color:#fbfeff; font-size: 20px; font-weight: bold; font-family: 'helvetica', sans-serif;margin-top: 10px;padding-bottom: 20px;">
//           Order Failed..!</p>
//       </div>
//       <div style="background-color:rgb(255, 255, 255);margin-top:-20px;padding:20px 20px;">
//         <div>
//           <br>
//           <p style="font-size: 15px;text-align: justify;margin: 10px;"><b>Some <span
//                 style="color: rgb(239, 109, 39);">Error
//               </span>Occured while Placing
//               Order
//               with following Details.
//             </b></p>
//           <div>
//             <table style="padding:0 0 10px ;width:100%;border-spacing: 10px;">`+
//     '${data}'
//     + `</table>
//             <p style="font-size: 15px;text-align: justify;margin: 10px;"><b>
//                 There is an Notification Mail only. Further Details Contact Admin.
//               </b></p>
//           </div>
  
//         </div>
//         <hr style="width: 100%; border-top: 2px solid rgba(138, 147, 155, 0.996);margin-top: 50px;">
//         <div style="color: #005374;line-height: 4;"><a><b>Follow us for more updates or visit us here at <a
//                 style="color: #f8821b;text-decoration: none;" href="https://zenbasket.in/home">zenbasket.in.</a></a></b>
//         </div>
//         <div style="display: inline-block;text-align: center;"><a href="https://www.facebook.com/ZenBasket/"
//             style="padding: 5px;"><img
//               src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/facebook.png"
//               alt="Zenbasket facebook link" style="height: 18px;"></a><a href="https://www.instagram.com/zenbasket/?hl=en"
//             style="padding: 5px;"><img
//               src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/insta.png"
//               alt="Zenbaset instagram link" style="height: 18px;"></a><a
//             href="https://twitter.com/zenbasket?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
//             style="padding: 5px;"><img
//               src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/twitter.png"
//               alt="Zenbasket twitter link" style="height: 18px;"></a><a
//             href="https://www.youtube.com/channel/UCKxvVDVd8clV2oEHFJVY6AA" style="padding: 5px;"><img
//               src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/youtube.png"
//               alt="Zenbasket youtube link" style="height: 18px;"></a></div>
//       </div>`
// }

// CONSTANT.SEND_REFUND_MAIL = {
//   errorSubject: "Your redeemed gift card balance have been successfully returned back to your gift card account",
//   errorMessage: `<html>
//   <body style="">
//     <head>
//       <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
//       <style>
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
//       </style>
//     </head>
//     <div style=" max-width:550px; margin: auto; text-align: center; margin-top: auto;border: 1px solid;background-color:rgb(255, 255, 255);">
//       <div style="">
//         <div style="margin-top: 20px;padding-top: 20px;padding-bottom:10px;">`+ '${logoUrl}' +
//     `</div>
//         <p
//           style="text-align: center; color: #005374; font-size: 20px; font-weight: bold; font-family: 'helvetica', sans-serif;margin-top: 10px;padding-bottom: 5px;">`
//     + '${name}' + `</p>
//       </div>
//       <div style="margin-top:-20px;padding:20px 20px;">
//         <div>
//           <div style="margin-left: 20px;margin-right: 20px;">
//             <p
//               style="text-align: center; color: #005374; font-size: 20px; font-weight: bold;margin-top: 10px;padding: 10px; border: 1px solid;">
//               Gift Card Balance Notification</p>
//           </div>
//           <br>
//           <p style="font-size: 20px;text-align: justify;margin: 5px;">Dear <span style="color: rgb(239, 109, 39);">
//               <b>`+ '${userName}' + `</b>
//             </span>
//           </p>
//           <p style="text-align: center; color:#000000; font-size: 20px;margin-top: 15px;padding-bottom: 2px;"><b>
//               Your gift card balance has been processed.</b></p>
//           <div>
//             <p style="font-size: 20px;text-align: justify;">
//               We have successfully returned your redeemed gift card balance(<span
//                 style="color: rgb(239, 109, 39);"><b>`+ '${usedGiftCardAmount}' + `</b></span>) to your gift card account
//               for order(<span style="color: rgb(239, 109, 39);"><b>#`+ '${orderId}' + `</b></span>) due to the cancellation of an order on `
//     + '${Date}' + `.
//               We apologize for any inconvenience caused.
//             </p>
//           </div>
//           <div style="margin-top: 20px;">
//             <p style="text-align: center; color:#000000; font-size: 20px;">
//               Thank You.!</p>
//           </div>
//           <div>
//             <p style="font-size: 20px;text-align: justify;">
//               If you have any questions,contact us here
//               <a href="tel:+`+ '${countryCode}' + ' ' + '${contactNo}' + ` style="text-decoration: none;"><span style="color: rgb(239, 109, 39);"><b>+` + '${countryCode}' + ' ' +
//     '${contactNo}' + `</b></span></a>
//             </p>
//           </div>
//         </div>
//         <hr style=" width: 100%; border-top: 2px solid rgba(138, 147, 155, 0.996);margin-top: 30px;">
//         <div style="color: #005374;line-height: 4;"><a><b>Powered By <a style="color: #f8821b;text-decoration: none;"
//                 href="https://zenbasket.in/home">zenbasket.in.</a></a></b>
//         </div>
//         <div style="display: inline-block;text-align: center;"><a href="https://www.facebook.com/ZenBasket/"
//             style="padding: 5px;"><img
//               src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/facebook.png"
//               alt="Zenbasket facebook link" style="height: 18px;"></a><a href="https://www.instagram.com/zenbasket/?hl=en"
//             style="padding: 5px;"><img
//               src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/insta.png"
//               alt="Zenbaset instagram link" style="height: 18px;"></a><a
//             href="https://twitter.com/zenbasket?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
//             href="https://twitter.com/zenbasket?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%
//             7Ctwgr%5Eauthor"
//             style="padding: 5px;"><img
//               src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/twitter.png"
//               alt="Zenbasket twitter link" style="height: 18px;"></a><a
//             href="https://www.youtube.com/channel/UCKxvVDVd8clV2oEHFJVY6AA" style="padding: 5px;"><img
//               src="https://zenbasket-dev.s3.us-west-2.amazonaws.com/microservices/mailtemplate/youtube.png"
//               alt="Zenbasket youtube link" style="height: 18px;"></a></div>
//       </div></div>`
// }
// CONSTANT.MAILTEMPLATEID = {
//   CustomerRegister: '057efea0-a075-11ed-82c5-ef4525acaa33',
//   forgotPassword: '08b6bb20-a314-11ed-a5ca-af146bc25554',
//   lowStockMail: '08b6bb20-a314-11ed-a5ca-af146bc25555',
//   Order: {
//     Bill: '8619f220-a4fa-11ed-92ca-23594c8b0a5f',
//     Processing: 'd91a6b80-a4fa-11ed-92ca-23594c8b0a5f',
//     Packed: 'dc2f3680-a503-11ed-9103-e7b10137924b',
//     Hold: '387dce80-a502-11ed-9103-e7b10137924b',
//     Delivered: 'bc007c60-a518-11ed-9103-e7b10137924b',
//     Shipped: 'fe611f60-a509-11ed-9103-e7b10137924b',
//     PickedUp: '3a8b06d0-a506-11ed-9103-e7b10137924b',
//     Cancelled: '48e48090-a51e-11ed-9103-e7b10137924b',
//     Returned: '',
//     Confirmed: '4d86a8b0-a52f-11ed-9103-e7b10137924b',
//     Refund: '7d69a0b0-a529-11ed-9103-e7b10137924b',
//     Ready: '4c2c9190-a51c-11ed-9103-e7b10137924b',
//     AdminOrder: '844f1530-a552-11ed-b4cb-6b22fa455935',
//   }
// }
// CONSTANT["domain_microservice"] = {
//   "checkActivationUrl": "https://api.centizenapps.com/site-status"
// }
// CONSTANT.CREDITTYPES = {
//   email: 'EMAIL',
//   sms: 'SMS'
// }