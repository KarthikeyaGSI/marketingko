"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LayoutDashboard, FileText, Settings, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen bg-black text-white pt-20">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 p-6 flex flex-col space-y-4">
        <div className="mb-10 px-2">
          <h2 className="text-xl font-bold tracking-tighter">ADMIN PANEL</h2>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Marketing Ko</p>
        </div>
        
        <button 
          onClick={() => setActiveTab("overview")}
          className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-white/10' : 'hover:bg-white/5'}`}
        >
          <LayoutDashboard size={20} /> <span>Overview</span>
        </button>
        <button 
          onClick={() => setActiveTab("content")}
          className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'content' ? 'bg-white/10' : 'hover:bg-white/5'}`}
        >
          <FileText size={20} /> <span>Content</span>
        </button>
        <button 
          onClick={() => setActiveTab("settings")}
          className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-white/10' : 'hover:bg-white/5'}`}
        >
          <Settings size={20} /> <span>Settings</span>
        </button>
        
        <div className="flex-1" />
        
        <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-white">
          <LogOut size={20} className="mr-3" /> Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-12">
        {activeTab === "overview" && (
          <div className="space-y-12">
            <h1 className="text-4xl font-bold tracking-tighter">System Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Total Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">1,284</div>
                  <p className="text-xs text-green-500 mt-2">+12% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Revenue Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">$12.4M</div>
                  <p className="text-xs text-green-500 mt-2">+5% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Site Traffic</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">45.2k</div>
                  <p className="text-xs text-muted-foreground mt-2">Visits this week</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "content" && (
          <div className="space-y-12">
            <h1 className="text-4xl font-bold tracking-tighter">Edit Content</h1>
            <Card className="bg-white/5 border-white/10 text-white p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Hero Headline</label>
                <Input defaultValue="AI SYSTEMS THAT PRINT REVENUE." className="bg-black border-white/10 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Hero Subheadline</label>
                <textarea 
                  className="w-full bg-black border border-white/10 rounded-lg p-4 h-32 focus:outline-none"
                  defaultValue="Automations built to outperform. We design and deploy elite AI infrastructures."
                />
              </div>
              <Button className="bg-white text-black font-bold px-8">Save Changes</Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
