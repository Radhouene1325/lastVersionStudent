import React, {Component} from 'react';
import Slider from "react-slick";


const postBlog= [
	{
		image: require('./../../images/testimonials/pic1.jpg'),
	},
	

]
const postBlog2= [
	
	{
		image: require('./../../images/testimonials/pic2.jpg'),
	},
	
]
const postBlog3= [
	
	{
		image: require('./../../images/testimonials/pic3.jpg'),
	},
	
]
const postBlog4= [
	
	{
		image: require('./../../images/testimonials/pic4.jpg'),
	},
	
]

class owltestimonial extends Component{
	render(){
		var settings = {
            slidesToShow: 3,
			arrows : false,
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
				
			 <Slider className="blog-carousel-center owl-carousel owl-none " {...settings}>
				{postBlog.map((item, index) => (
					<div className="item p-1" key={index}>
						<div className="testimonial-5">
							<div className="testimonial-text">
								<p>Vivre dans une société civile technologique est un signe indirecte que votre prochaine mission existentielle sera la création de la valeur ajoutée digitale pour l'humanité.</p>
								
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={item.image} width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">Moemen Ben Brahim</strong> 
								{/* <span className="testimonial-position">Student</span>  */}
							</div>
						</div>
					</div>	
				))}
				
				{postBlog2.map((item, index) => (
					<div className="item p-1" key={index}>
						<div className="testimonial-5">
							<div className="testimonial-text">
								<p> La technologie n'est pas aussi importante que les personnes ou la société, ce qui compte, c'est le projet humain  qui la sous-tend.</p>
								
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={item.image} width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">Samar Saidi</strong> 
								{/* <span className="testimonial-position">Student</span>  */}
							</div>
						</div>
					</div>	
				))}
				{postBlog3.map((item, index) => (
					<div className="item p-1" key={index}>
						<div className="testimonial-5">
							<div className="testimonial-text">
								<p>To be truly satisfied with what you do, aim for a big goal. And the only way to do a good job is to believe in that goal</p>
								
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={item.image} width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">Zied Rouissi</strong> 
								{/* <span className="testimonial-position">Student</span>  */}
							</div>
						</div>
					</div>	
				))}
				{postBlog4.map((item, index) => (
					<div className="item p-1" key={index}>
						<div className="testimonial-5">
							<div className="testimonial-text">
								<p>Le travail éloigne de nous trois grands maux : l’ennui, le vice et le besoin. </p>
								
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={item.image} width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">Sara Kabaou</strong> 
								{/* <span className="testimonial-position">Student</span>  */}
							</div>
						</div>
					</div>	
				))}

			</Slider>
					
				
		)
		
	}
}
	


export default owltestimonial;