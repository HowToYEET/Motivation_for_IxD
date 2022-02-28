import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class Abstracts extends Component {
  state = {};
  render() {
    return (
      <Carousel className="abstract">
        <Carousel.Item className="info">
          <h1>Abstract for first project</h1>
          <p>
            This report sets out to help students, by suggesting potential
            education rou- tes based on a short series of quesitons. Studies
            from 2018 shows that 36% students are dropping out from their
            studies, largely based on a wrong choice of field of study. We have
            con- ducted some interviews that supports the idea, that this number
            of dropouts is somewhat related to the subpar quality of
            pre-existing tools that aim to help studients picking the right
            field of study, which the interviewed people largley agree is to
            broad. Based on these interviews, we’ve set out to develop a program
            that can be used as an extension of these pre-existing tools, as the
            tool we’ve developed requries you to already know the genreal
            subject of your field of study.
          </p>
        </Carousel.Item>
        <Carousel.Item className="info">
          <h1>Abstract for second project</h1>
          <p>
            The focus of this report is on the problems with today’s
            authentication and how they can be tackled. The report has a focus
            on companies but looks at non- business related material as well.
            Using only passwords as authentication methods is insecure and most
            companies reset the passwords of their employees every third month.
            This leads to employees forgetting or misremembering their passwords
            which costs the companies a lot of money. This problem is solved by
            applying multi factor authentication. Several authentication methods
            are examined to find a good second method of authentication. It is
            found that physical key authentication is a good authentication
            method. The solution pro- gram is a password vault that can store
            the employees’ passwords. The authentication methods for the
            password vault is an ordinary password and a physical key which must
            be plugged into the computer. This can help employees login easier
            and can potentially save companies money ev- ery year.
          </p>
        </Carousel.Item>
        <Carousel.Item className="info">
          <h1>Abstract for third project</h1>
          <p>
            Domino Møbler ApS is a company that is looking for improvements to
            their current product management system. This project focuses on how
            to help the company by developing a program that can manage both
            products and employees. Throughout the development process,
            communication has been maintained with a leader from within the
            company. After the development of the program, tests were conducted
            to establish pos- sible problem areas related to user experience and
            system functionalities, that needed improvement. This lead to the
            discussion, which describes some of the choices that were made,
            along with missing functionalities, and possibilities for future
            development. It is possible to develop a newer and more modernised
            system to help the workers of the company with their daily tasks.
            The system will involve all employees, no matter status, to make as
            many aspects as possible more au- tomated.
          </p>
        </Carousel.Item>
        <Carousel.Item className="info">
          <h1>Abstract for forth project</h1>
          <p>
            Currently, only a few languages exist specifically for developing
            text-based adventure games. General purpose languages could be used,
            but these might be intimidating for new developers. To solve this
            issue, the language ’Simple Written Adventure Engine’, also called
            ’SWAE’, has been developed. SWAE aims to be a language with a
            syntax, akin to English. SWAE introduce concepts such as ’choice’
            for reading and reacting on player input, and ’location’ for
            managing conceptual locations. SWAE is a language intended for
            everyone interested in writing ’choose-your-own-adventure’ style
            stories.
          </p>
          <h1>Abstract for fifth project</h1>
          <p>
            The GIRAF project has been ongoing for 10 years, and is created with
            the purpose to help people with Autism Spectrum Disorder. This
            year, four groups have been working together on developing GIRAF.
            This project consists of one application which is the weekplanner.
            Working on the weekplanner, some sprints and features were set.
            Given this, some difficulties occurred, but in the end all sprint
            goals were achieved. The GIRAF 2021 semesters goal were to deliver a
            "sufficient secure release", which did not fully succeed. Finally,
            some recommendations is given to the successors working on the
            GIRAF project.
          </p>
        </Carousel.Item>
      </Carousel>
    );
  }
}
