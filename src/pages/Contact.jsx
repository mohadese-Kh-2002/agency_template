import { useState } from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Button from "../components/Button";
import { MdOutlineAlternateEmail, MdOutlineContentCopy } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { IoLocationOutline, IoTimeOutline } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { TbClock } from "react-icons/tb";
import siteData from "../data/site.json";
import TextHighlighter from "../components/Highlight";
import { useForm } from 'react-hook-form';
import SEO from "../components/SEO";

const Contact = () => {
  const contact = siteData.contact;
  const contactHero = siteData.pages.contact_us.hero;
  
  const [submitError, setSubmitError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [copiedField, setCopiedField] = useState("");
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setSubmitError("");
    
    try {
      const response = await fetch(contact.formUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: "تماس جدید از سایت CORVEX",
          _replyto: data.email
        })
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || "خطا در ارسال");
      }
      
      reset();
      setModalType("success");
      setShowModal(true);
      
      setTimeout(() => {
        setShowModal(false);
        setModalType("");
      }, 3000);
      
    } catch (error) {
      console.error("خطا در ارسال فرم:", error);
      setSubmitError(error.message || "مشکلی پیش اومد");
      setModalType("error");
      setShowModal(true);
      
      setTimeout(() => {
        setShowModal(false);
        setModalType("");
      }, 3000);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };
console.log(contactHero.title);
  return (
    <>
      <SEO
        title={siteData.pages.contact_us.title}
        description={siteData.pages.contact_us.description}
        url="/contact_us"
      />
      
      <div className="py-8">
        <Container>
         
          <Hero title={contactHero.title} description={<TextHighlighter text={contactHero.subtitle} highlight={"صحبت کنیم"}/>}/>
   
          <div className="flex justify-center my-8 ">
            <div className="inline-flex items-center gap-3 bg-(--surface) border border-(--primary) px-6 py-3 rounded-full shadow-lg">
              <div className="w-8 h-8 bg-(--primary)/10 rounded-full flex items-center justify-center">
                <TbClock className="text-(--primary)" />
              </div>
              <span className="font-medium">پاسخگویی حداکثر تا ۲۴ ساعت کاری</span>
            </div>
          </div>

       
          {submitError && !showModal && (
            <div className="max-w-2xl mx-auto mb-6">
              <div className="p-4 bg-red-500/10 border border-red-500 rounded-2xl text-center">
                <p className="text-red-500">{submitError}</p>
              </div>
            </div>
          )}

        
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
            <div className="lg:col-span-2">
              <div className="bg-(--surface) border border-(--border) rounded-[36px] p-8 hover:border-(--primary) transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-linear-to-r from-(--primary) to-(--secondary) rounded-2xl flex items-center justify-center text-white">
                    <BiMessageDetail className="text-[20px]" />
                  </div>
                  <div>
                    <h2 className="text-[20px] font-bold">ارسال پیام</h2>
                    <p className="text-[14px] text-(--text-muted)">ما همیشه خوشحال می‌شویم از شما بشنویم</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
             
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center gap-1 text-[14px] font-medium">
                      <span>نام و نام خانوادگی</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { 
                        required: "نام الزامی است",
                        minLength: {
                          value: 2,
                          message: "نام باید حداقل ۲ حرف باشد"
                        }
                      })}
                      placeholder="مثال: علی مرادی"
                      className={`w-full px-4 py-3 bg-(--bg)/50 border rounded-xl outline-none transition-all
                        ${errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-(--border) focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20'
                        }`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[14px] mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-1 text-[14px] font-medium">
                      <span>آدرس ایمیل</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", { 
                        required: "ایمیل الزامی است",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "ایمیل معتبر وارد کنید"
                        }
                      })}
                      placeholder="مثال: info@corvex.ir"
                      className={`w-full px-4 py-3 bg-(--bg)/50 border rounded-xl outline-none transition-all
                        ${errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-(--border) focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20'
                        }`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[14px] mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="flex items-center gap-1 text-[14px] font-medium">
                      <span>پیام شما</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      {...register("message", { 
                        required: "پیام الزامی است",
                        minLength: {
                          value: 10,
                          message: "پیام باید حداقل ۱۰ حرف باشد"
                        },
                        maxLength: {
                          value: 500,
                          message: "پیام نمی‌تواند بیشتر از ۵۰۰ حرف باشد"
                        }
                      })}
                      placeholder="پیام خود را بنویسید..."
                      className={`w-full px-4 py-3 bg-(--bg)/50 border rounded-xl outline-none resize-none transition-all
                        ${errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-(--border) focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20'
                        }`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-[14px] mt-1">{errors.message.message}</p>
                    )}
                  </div>

                
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 text-lg font-medium relative overflow-hidden group
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    variant="primary"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        در حال ارسال...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        ارسال پیام
                        <FiSend className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>

       
            <div className="space-y-6">
          
              <div className="bg-(--surface) border border-(--border) rounded-3xl p-6 hover:border-(--primary) transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-(--primary) rounded-full"></span>
                  اطلاعات تماس
                </h3>
                
                <div className="space-y-4">
             
                  <div className="flex items-center justify-between p-3 bg-(--primary)/5 rounded-xl hover:bg-(--primary)/10 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-(--primary)/10 rounded-lg flex items-center justify-center">
                        <HiPhone className="text-(--primary)" />
                      </div>
                      <div>
                        <div className="text-[12px] text-(--text-muted)">تلفن</div>
                        <div className="font-medium">{contact.phone}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(contact.phone, 'phone')}
                      className="p-2 hover:bg-(--primary)/10 rounded-lg transition"
                    >
                      <MdOutlineContentCopy className={`text-(--text-muted) hover:text-(--primary) ${copiedField === 'phone' ? 'text-green-500' : ''}`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-(--primary)/5 rounded-xl hover:bg-(--primary)/10 transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-(--primary)/10 rounded-lg flex items-center justify-center">
                        <MdOutlineAlternateEmail className="text-(--primary)" />
                      </div>
                      <div>
                        <div className="text-[12px] text-(--text-muted)">ایمیل</div>
                        <div className="font-medium">{contact.email}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(contact.email, 'email')}
                      className="p-2 hover:bg-(--primary)/10 rounded-lg transition"
                    >
                      <MdOutlineContentCopy className={`text-(--text-muted) hover:text-(--primary) ${copiedField === 'email' ? 'text-green-500' : ''}`} />
                    </button>
                  </div>

                
                  <div className="p-3 bg-(--primary)/5 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-(--primary)/10 rounded-lg flex items-center justify-center shrink-0">
                        <IoLocationOutline className="text-(--primary)" />
                      </div>
                      <div>
                        <div className="text-[12px] text-(--text-muted) mb-1">آدرس</div>
                        <div className="text-[14px]">{contact.address}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           
              <div className="bg-(--surface) border border-(--border) rounded-3xl p-6 hover:border-(--primary) transition-all">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-(--primary) rounded-full"></span>
                  ما را دنبال کنید
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-xl hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all group"
                  >
                    <FaInstagram className="text-xl text-purple-500 group-hover:text-white" />
                    <span className="text-[14px] font-medium">اینستاگرام</span>
                  </a>
                  
                  <a
                    href={contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-xl hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all group"
                  >
                    <FaLinkedinIn className="text-xl text-blue-500 group-hover:text-white" />
                    <span className="text-[14px] font-medium">لینکدین</span>
                  </a>
                  
                  <a
                    href={contact.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-linear-to-r from-blue-400/10 to-indigo-500/10 rounded-xl hover:from-blue-400 hover:to-indigo-500 hover:text-white transition-all group"
                  >
                    <FaTelegramPlane className="text-xl text-blue-400 group-hover:text-white" />
                    <span className="text-[14px] font-medium">تلگرام</span>
                  </a>
                  
                  <a
                    href={contact.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-xl hover:from-green-500 hover:to-emerald-500 hover:text-white transition-all group"
                  >
                    <FaWhatsapp className="text-xl text-green-500 group-hover:text-white" />
                    <span className="text-[14px] font-medium">واتساپ</span>
                  </a>
                </div>
              </div>

              <div className="bg-(--surface) border border-(--border) rounded-3xl p-6 hover:border-(--primary) transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-(--primary)/10 rounded-xl flex items-center justify-center">
                    <IoTimeOutline className="text-xl text-(--primary)" />
                  </div>
                  <div>
                    <div className="text-[14px] text-(--text-muted)">ساعات کاری</div>
                    <div className="font-medium">شنبه تا پنجشنبه - ۹ تا ۱۸</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

       
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className={`bg-(--surface) rounded-3xl p-8 max-w-md w-full text-center border-2
              ${modalType === 'success' ? 'border-green-500' : 'border-red-500'}`}
            >
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4
                ${modalType === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'}`}
              >
                {modalType === 'success' ? (
                  <FiCheckCircle className="text-4xl text-green-500" />
                ) : (
                  <div className="text-4xl text-red-500">!</div>
                )}
              </div>
              
              <h3 className={`text-[20px] font-bold mb-2
                ${modalType === 'success' ? 'text-green-500' : 'text-red-500'}`}
              >
                {modalType === 'success' ? 'پیام شما ارسال شد' : 'خطا در ارسال'}
              </h3>
              
              <p className="text-(--text-muted) mb-6">
                {modalType === 'success' 
                  ? 'از ارتباط با شما خوشحالیم. در اسرع وقت پاسخگو خواهیم بود.'
                  : submitError || 'مشکلی پیش آمد. لطفاً دوباره تلاش کنید.'}
              </p>
              
              <button
                onClick={() => setShowModal(false)}
                className={`px-6 py-2 rounded-full text-white font-medium
                  ${modalType === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
              >
                بستن
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;