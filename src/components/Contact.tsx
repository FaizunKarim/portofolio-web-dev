"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Pesan berhasil dikirim!');
      } else {
        alert('Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan. Silakan coba lagi nanti.');
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Mengirim...");

  //   try {
  //     const response = await fetch('http://localhost:3001/api/send', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       setStatus("Pesan Anda telah berhasil dikirim!");
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       setStatus("Gagal mengirim pesan. Silakan coba lagi.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setStatus("Terjadi kesalahan. Tidak dapat terhubung ke server.");
  //   }
  // };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Hubungi <span className="bg-gradient-primary bg-clip-text text-transparent">Saya</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi? Mari diskusikan project Anda dan bagaimana saya bisa membantu.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="hover:shadow-card transition-all duration-300">
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Nama Anda" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Pesan Anda"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" disabled={status === "Mengirim..."} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-300 disabled:opacity-50">
                  {status === "Mengirim..." ? "MENGIRIM..." : "SUBMIT"}
                </Button>
                
                {status && status !== "Mengirim..." && (
                  <p className={`text-center mt-4 ${status.includes("berhasil") ? "text-green-500" : "text-red-500"}`}>
                    {status}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;