import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faTwitter,
//   faInstagram,
//   faYoutube,
//   faGithub,
//   faLinkedin,
// } from '@fortawesome/free-brands-svg-icons'
// import { faRss } from '@fortawesome/free-solid-svg-icons'
// import { OutboundLink } from 'gatsby-plugin-google-gtag'

import useSiteMetadata from '../queries/site-metadata'

const Footer = () => {
  const {
    description,
    // social: { twitter, instagram, youtube, github, linkedin },
  } = useSiteMetadata()

  return (
    <footer className="border-t mt-1 py-1  px-4 lg:px-0 bg-sky-500/100">
      <div className="flex flex-wrap">
        <div className="w-full mt-6 lg:mt-0 lg:w-1/2 lg:w-2/5">
          <div className="p-4">
            <h6 className="font-semibold text-gray-700 mb-4">Footer</h6>
            <ul>
              <li>
                <div className="flex justify-start items-center text-lg text-gray-700">
                  {/* {twitter && (
                    <OutboundLink
                      className="flex items-center hover:text-gray-700 mr-5"
                      href={`https://twitter.com/${twitter}`}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </OutboundLink>
                  )}

                  {instagram && (
                    <OutboundLink
                      className="flex items-center hover:text-gray-700 mr-5"
                      href={`https://www.instagram.com/${instagram}`}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </OutboundLink>
                  )}

                  {youtube && (
                    <OutboundLink
                      className="flex items-center hover:text-gray-700 mr-5"
                      href={`https://www.youtube.com/channel/${youtube}`}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </OutboundLink>
                  )}

                  {github && (
                    <OutboundLink
                      className="flex items-center hover:text-gray-700 mr-5"
                      href={`https://github.com/${github}`}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </OutboundLink>
                  )}

                  {linkedin && (
                    <OutboundLink
                      className="flex items-center hover:text-gray-700 mr-5"
                      href={`https://www.linkedin.com/company/${linkedin}`}
                      target="_blank"
                      rel="noreferrer nofollow"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </OutboundLink>
                  )}

                  <a
                    href="/rss.xml"
                    className="flex items-center hover:text-gray-700 mr-5"
                    type="application/rss+xml"
                    rel="alternate nofollow"
                  >
                    <FontAwesomeIcon icon={faRss} />
                  </a> */}
                  {description} Copyright @2022
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
